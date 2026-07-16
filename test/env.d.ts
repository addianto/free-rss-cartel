declare module 'cloudflare:test' {
	interface ProvidedEnv extends Env {
		AUTHORIZATION_KEY: string;
	}
}
