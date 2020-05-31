import React, { useContext, useState, Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Toast } from 'reactstrap';
import { useRouter } from 'next/router';

import { AppContext } from '../lib/AppContext';
import { getUniqueProducts } from '../lib/utils';

const AddToCartButton = ({ onClickCallback }) => {
	const [state, setState] = useState({ text: 'Add To Cart', addedToCard: false });

	const router = useRouter();

	const onClick = () => {
		if (!state.addedToCart) {
			setState({ text: 'Go To Cart', addedToCart: true });
			onClickCallback();
		} else {
			router.push('/cart');
		}
	};
	return (
		<Button onClick={onClick} className='float-right add-to-cart-btn'>
			{state.text}
		</Button>
	);
};

const ProductsList = ({ products }) => {
	const { globalStore, updateStore } = useContext(AppContext);
	const [showToast, setShowToast] = useState(false);

	const { user, cart } = globalStore;

	const addProductToCart = (product) => {
		const cartData = { ...product };
		let updatedCart = [...cart];
		updatedCart.push(cartData);
		updateStore('cart', getUniqueProducts(updatedCart));
		localStorage.setItem('cart', JSON.stringify(updatedCart));
		setShowToast(true);
		setTimeout(() => setShowToast(false), 2500);
	};

	return (
		<div className='product-container'>
			{showToast && <Toast>Product Added To cart</Toast>}
			{products.map((product, i) => {
				const addedToCart = false;
				return (
					<Row className='mb-2' key={i}>
						<Col>
							<Card className='p-2'>
								<Row>
									<Col md={8}>
										<Row>
											<Col>
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
											<Col className={'align-self-center'}>
												<Row>
													<Col>
														<CardTitle className='pl-1'>{product.name}</CardTitle>
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
										</Row>
									</Col>
									<Col className={'align-self-center'}>
										<AddToCartButton onClickCallback={() => addProductToCart(product)} />
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				);
			})}
		</div>
	);
};

export default ProductsList;
