import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: resolve('src/assets'),
			$components: resolve('src/components'),
			$utilities: resolve('src/utilities')
		}
	}
};

export default config;
