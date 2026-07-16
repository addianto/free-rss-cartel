import { Elysia, t } from 'elysia';
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker';
import { env } from 'cloudflare:workers';

export default new Elysia({
	adapter: CloudflareAdapter,
})
	.get(
		'/',
		async ({ query }) => {
			const expectedAuthorizationKey = env.AUTHORIZATION_KEY;
			const response = await fetch(query.url, {
				method: 'GET',
				headers: {
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
				},
			});
			const data = await response.text();
			return data;
		},
		{
			query: t.Object({
				url: t.String(),
			}),
		},
	)
	.compile();
