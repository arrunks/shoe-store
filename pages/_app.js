import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Head>
				<title>Shoe Store</title>
			</Head>
			<div className='page-wrapper'>
				<div className='container'>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};

export default MyApp;
