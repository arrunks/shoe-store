import React, { Fragment, useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Row, Col, Button, Label, Input } from 'reactstrap';

import { AppContext } from '../lib/AppContext';
import { removeProductFromCart } from '../lib/utils';

const CartItems = () => {
	const { globalStore, updateStore } = useContext(AppContext);

	const { user, cart } = globalStore;

	const removeItem = (cart, id) => {
		cart = removeProductFromCart(cart, id);
		updateStore('cart', cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	return (
		<Fragment>
			{cart.length > 0 && (
				<Row>
					<Col md={6}>
						{cart.map((product, i) => {
							return (
								<div key={i} className='transparent-container mb-2'>
									<Row>
										<Col md={3}>
											<div className='product-image'>
												<img
													top
													width='100%'
													height='100%'
													src={`${product.displayImage}`}
													alt='Card image cap'
												/>
											</div>
										</Col>
										<Col>
											<h4>{product.name}</h4>
											<p>Rs. {product.price}</p>
											<Button onClick={() => removeItem(cart, product.id)}>
												Remove From Cart
											</Button>
										</Col>
									</Row>
									<Row>
										<Col>
											<p className='mt-4'>{product.description}</p>
										</Col>
									</Row>
								</div>
							);
						})}
					</Col>
					<Col md={6}>
						<Button className='checkout-link'>
							<Link href='/checkout'>Proceed To Checkout</Link>
						</Button>
						<img src='https://www.internationalscienceediting.com/wp-content/uploads/2017/06/logo-stripe.png' />
					</Col>
				</Row>
			)}

			{cart.length <= 0 && <p>You have nothing in the cart.</p>}
		</Fragment>
	);
};

export default CartItems;
