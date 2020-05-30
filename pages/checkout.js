import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../components/CheckoutForm';

const promise = loadStripe('pk_test_w33b2TAjMtPoB66rJb0jx4hL00Cp3TbzQk');

const Checkout = () => {
	return (
		<div>
			<h2>Checkout</h2>
			<Elements stripe={promise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
};

export default withAuth(withLayout(Checkout), { loginRequired: true });
