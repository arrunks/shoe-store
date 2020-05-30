import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import cookies from 'next-cookies';

export default function createApolloClient(initialState, ctx = {}) {
	// The `ctx` (NextPageContext) will only be present on the server.
	// use it to extract auth headers (ctx.req) or similar.

	const { jwt } = cookies(ctx);

	return new ApolloClient({
		ssrMode: Boolean(ctx),
		link: new HttpLink({
			uri: `${process.env.backendUrl}/graphql`, // Server URL (must be absolute)
			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
			fetch,
			headers: {
				authorization: jwt ? `Bearer ${jwt}` : '',
			},
		}),
		cache: new InMemoryCache().restore(initialState),
	});
}
