declare module 'cloudflare:test' {
	interface ProvidedEnv extends Env {
		AUTH_KEY: string;
		ALLOWED_HOSTNAMES: string;
	}
}
