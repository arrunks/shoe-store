import withAuth from '../lib/withAuth';
import withLayout from '../lib/withLayout';

import CartItems from '../components/CartItems';

const Cart = ({ user }) => {
	return (
		<div>
			<h2>Cart</h2>
			<CartItems user={user} />
		</div>
	);
};

export default withAuth(withLayout(Cart), { loginRequired: false });
