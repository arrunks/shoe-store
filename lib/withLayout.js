import React from 'react';
import Router from 'next/router';

import NProgress from 'nprogress';

import Header from '../components/Header';

import { withApollo } from '../lib/apollo';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import { AppContext } from './AppContext';
import { getUniqueProducts } from '../lib/utils';

function withLayout(BaseComponent) {
	class App extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				user: props.user,
				cart: [],
			};
		}

		updateValue = (key, val) => {
			this.setState({ [key]: val });
		};

		componentDidMount() {
			const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'));
			const cart = cartInLocalStorage ? getUniqueProducts(cartInLocalStorage) : [];
			this.setState({ cart });
		}

		render() {
			return (
				<AppContext.Provider value={{ globalStore: this.state, updateStore: this.updateValue }}>
					<Header {...this.props} />
					<BaseComponent {...this.props} />
				</AppContext.Provider>
			);
		}
	}

	App.getInitialProps = (ctx) => {
		if (BaseComponent.getInitialProps) {
			return BaseComponent.getInitialProps(ctx);
		}

		return {};
	};

	return withApollo({ ssr: true })(App);
}

export default withLayout;
