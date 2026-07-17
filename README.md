# Free RSS Cartel

An RSS feed proxy via Cloudflare to get around geoblocking for a certain RSS feed I subscribe to.

## Why?

As described above, plus:

1. Two students of mine recommended me to try ElysiaJS.
   Turns out I like the aesthetic and probably can get along with the author in regards to our hobby.
2. ElysiaJS name seems inspired from Blue Archive, e.g., "Eden Treaty" component in the framework.
   So, I figure I could pick a name from the universe as well. Free Trade Cartel -> Free RSS Cartel.

## Setup

_Notes: SOON ™️ But, for now, disable telemetry to Cloudflare_

1. Disable Wrangler telemetry:
   ```shell
   pnpm exec wrangler telemetry disable
   ```

Do not forget to run `wrangler types` after making changes to `.env` or [`wrangler.jsonc`](./wrangler.jsonc):

```shell
pnpm exec wrangler types
```

## Runtime Configuration

There is one environment variable and one secret required for running this worker on Cloudflare Worker:

- The `ALLOWED_HOSTNAMES` environment variable lists the domain names that can be read by the worker.
  If left empty, then there is no restriction of the URL that will be read by the worker.
- The `AUTH_KEY` secret is a simple key-based authorization for ensuring only you and/or parties you give access to can use this worker.
  If left empty, then the worker will not run and terminate early.

## License

[MIT](./LICENSE).
