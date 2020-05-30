const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			sassOptions: {
				includePaths: [path.join(__dirname, 'styles')],
			},
			env: {
				backendUrl: 'http://localhost:1337', //http://shoe-store-459.herokuapp.com/
			},
		};
	}

	return {
		sassOptions: {
			includePaths: [path.join(__dirname, 'styles')],
		},
		env: {
			backendUrl: 'https://shoe-store-strapi.herokuapp.com',
		},
	};
};
