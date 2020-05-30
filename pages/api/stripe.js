const stripe = require('stripe')('sk_test_iPBQeVQ7Kpkw3MR0m9BWhiqC00bBPagLIZ');

export default async (req, res) => {
	const { amount } = req.body;

	if (req.method === 'POST') {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: amount,
			currency: 'usd',
			description: 'description ',
		});
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.end(
			JSON.stringify({
				clientSecret: paymentIntent.client_secret,
			})
		);
	}
};
