import { Elysia, t } from 'elysia';
import { CloudflareAdapter } from 'elysia/adapter/cloudflare-worker';
import { env } from 'cloudflare:workers';

export default new Elysia({
	adapter: CloudflareAdapter,
})
	.get(
		'/',
		async ({ query }) => {
			const givenAuthorizationKey = query.authKey ?? '';
			const expectedAuthorizationKey = env.AUTH_KEY;
			const cleanUrl = query.quotedUrl.replace(/['"]+/g, '');

			if (givenAuthorizationKey !== expectedAuthorizationKey) {
				return new Response('Forbidden', { status: 403 });
			}

			const response = await fetch(cleanUrl, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/rss+xml',
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
				},
			});
			const data = await response.text();
			return data;
		},
		{
			query: t.Object({
				quotedUrl: t.String(),
				authKey: t.MaybeEmpty(t.String()),
			}),
		},
	)
	.compile();
