import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, '/src/main.js'),
			fileName: 'dexios-ui',
		},
	},
});
