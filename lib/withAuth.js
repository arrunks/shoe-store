import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import cookies from 'next-cookies';

let globalUser = null;

function withAuth(BaseComponent, { loginRequired = true, logoutRequired = false } = {}) {
	class App extends React.Component {
		static propTypes = {
			user: PropTypes.shape({
				username: PropTypes.string,
				email: PropTypes.string.isRequired,
			}),
			isFromServer: PropTypes.bool.isRequired,
		};

		static defaultProps = {
			user: null,
		};

		componentDidMount() {
			const { user, isFromServer } = this.props;

			if (isFromServer) {
				globalUser = user;
			}

			// If login is required and not logged in, redirect to "/login" page
			if (loginRequired && !logoutRequired && !user) {
				Router.push('/signin');
				return;
			}

			// If logout is required and user logged in, redirect to "/" page
			if (logoutRequired && user) {
				Router.push('/');
			}
		}

		static async getInitialProps(ctx) {
			const isFromServer = !!ctx.req;

			let user = globalUser;

			const { jwt } = cookies(ctx);
			if (jwt) {
				const res = await fetch(`${process.env.backendUrl}/users/me/`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				});
				user = await res.json();
			}

			if (isFromServer && user) {
				// Convert "_id"(ObjectID from MongoDB) object to string
				user._id = user._id.toString();
			}

			const props = { user, isFromServer };

			// Call child component's "getInitialProps", if it is defined
			if (BaseComponent.getInitialProps) {
				Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
			}

			return props;
		}

		render() {
			const { user } = this.props;

			if (loginRequired && !logoutRequired && !user) {
				return null;
			}

			if (logoutRequired && user) {
				return null;
			}

			return <BaseComponent {...this.props} />;
		}
	}

	return App;
}

export default withAuth;
