import ProductsList from '../components/ProductsList';
import cookies from 'next-cookies';
import withLayout from '../lib/withLayout';
import withAuth from '../lib/withAuth';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Row, Col } from 'reactstrap';

const QUERY = gql`
	query {
		products {
			name
			description
			price
			id
			displayImage
		}
	}
`;

const Index = ({ user }) => {
	const { loading, data } = useQuery(QUERY);

	if (loading || !data) {
		return <h1>loading...</h1>;
	}
	return (
		<Row>
			<Col>
				<h2 className='hero-text'>RUN THE WORLD</h2>
			</Col>

			<Col>
				<ProductsList products={data.products} user={user} />
			</Col>
		</Row>
	);
};

export default withAuth(withLayout(Index), { loginRequired: false });
