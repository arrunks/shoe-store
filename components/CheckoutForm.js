import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Row, Col, Button, Label, Input } from 'reactstrap';

import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

import { AppContext } from '../lib/AppContext';
import CartItems from '../components/CartItems';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const PLACE_ORDER = gql`
	mutation createOrder($type: createOrderInput!) {
		createOrder(input: $type) {
			order {
				id
			}
		}
	}
`;

const CheckoutForm = () => {
	const { globalStore, updateStore } = useContext(AppContext);
	const [shippingAddress, setShippingAddress] = useState();
	const [createOrder] = useMutation(PLACE_ORDER);

	const { user, cart } = globalStore;

	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState('');
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState('');

	const stripe = useStripe();
	const elements = useElements();

	const totalPrice = cart.reduce((a, c) => {
		return a + c.price;
	}, 0);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		if (totalPrice) {
			window
				.fetch('/api/stripe', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ amount: totalPrice }),
				})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setClientSecret(data.clientSecret);
				});
		}
	}, [totalPrice]);

	const cardStyle = {
		style: {
			base: {
				color: '#32325d',
				fontFamily: 'Arial, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#32325d',
				},
				backGroundColor: '#ffffff',
				height: '400px',
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	};
	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};

	const placeOrder = async () => {
		if (!shippingAddress || disabled) {
			return false;
		}

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					address: {
						city: 'delhi',
						country: 'US',
						line1: 'adf',
						line2: null,
						postal_code: '18888',
						state: 'dehli',
					},
					email: user.email,
					name: user.username,
					phone: '+15555555555',
				},
			},
		});

		const productIds = cart.reduce((a, c) => {
			a.push(c.id);
			return a;
		}, []);
		createOrder({
			variables: {
				type: { data: { user: user._id, products: productIds, shippingAddress, amount: totalPrice } },
			},
		});
		updateStore('cart', []);
		localStorage.setItem('cart', JSON.stringify([]));
		Router.push('/orders');
	};

	const removeItem = (cart, id) => {
		cart = removeProductFromCart(cart, id);
		updateStore('cart', cart);
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	return (
		<div>
			{!cart && <p>No Order in place.</p>}
			{cart && (
				<Row>
					<Col>
						<div className='transparent-container'>
							<p>Total Price: Rs. {totalPrice}</p>
							<div>
								<Row>
									<Col>
										<Label>Enter Card Information</Label>
										<CardElement
											className='card-number-element'
											options={cardStyle}
											onChange={handleChange}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Label>Shipping Address:</Label>
										<Input
											type='textarea'
											name='text'
											id='shippingAddress'
											onChange={(e) => setShippingAddress(e.target.value)}
										/>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button onClick={placeOrder} className='mt-4'>
											Place Order
										</Button>
										{error && (
											<div className='card-error' role='alert'>
												{error}
											</div>
										)}
										<p>Testing Card Number: "4000056655665556"</p>
										<p>This is a demo application only and no item will be delivered.</p>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col>
						<Col md={6}>
							<img src='https://www.internationalscienceediting.com/wp-content/uploads/2017/06/logo-stripe.png' />
						</Col>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default CheckoutForm;
