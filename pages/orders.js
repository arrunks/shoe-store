import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FETCH_ORDER = gql`
	query orders($where: JSON) {
		orders(where: $where) {
			createdAt
			id
			products {
				name
				price
				displayImage
			}
		}
	}
`;

const Orders = ({ user }) => {
	const { loading, error, data } = useQuery(FETCH_ORDER, {
		variables: { $type: { user: { id: user.id } } },
	});
	if (loading) return <p>Loading ...</p>;
	return (
		<div className='orders-container'>
			<h4>Your orders</h4>
			{!data && <p>No Orders found.</p>}
			{data && (
				<div>
					{data.orders.map((order, i) => {
						return (
							<div key={i}>
								<h4>
									{i + 1}. Order Id : {order.id}
								</h4>
								<p>Placed Successfully At: {order.createdAt}</p>
								<h4>Contains Items:</h4>
								{order.products.map((product, i) => {
									return (
										<Row className='mb-2' key={i}>
											<Col>
												<Card className='p-2'>
													<Row>
														<Col className={'align-self-center'}>
															<Row>
																<Col>
																	<CardTitle className='pl-1'>
																		{i + 1}. {product.name}
																	</CardTitle>
																</Col>
															</Row>
															<Row>
																<Col>
																	<CardSubtitle className='pl-1'>
																		Rs. {product.price}
																	</CardSubtitle>
																</Col>
															</Row>
														</Col>
														<Col md={3}>
															<div className='product-image'>
																<CardImg
																	top
																	width='100%'
																	height='100%'
																	src={`${product.displayImage}`}
																	alt='Card image cap'
																/>
															</div>
														</Col>
													</Row>
												</Card>
											</Col>
										</Row>
									);
								})}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default withAuth(withLayout(Orders), { loginRequired: true });
