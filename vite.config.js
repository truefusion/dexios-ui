import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode, ssrBuild }) => {
	return {
		plugins: [vue()],
		build: {
			cssCodeSplit: true,
			lib: {
				entry: resolve(__dirname, 'src/plugin.js'),
				name: 'dexios-ui',
			},
			rollupOptions: {
				external: ['vue'],
				output: {
					globals: {
						vue: 'Vue',
					},
				},
			},
		},
	};
});
