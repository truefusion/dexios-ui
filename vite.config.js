import { defineConfig } from 'vite';

export default defineConfig(({ command, mode, ssrBuild }) => {
	if (command === 'serve') {
		return {
			plugins: [vue()],
			resolve: {
				alias: {
					'@': fileURLToPath(new URL('./src', import.meta.url)),
				},
			},
		};
	} else {
		return {
			build: {
				cssCodeSplit: true,
				lib: {
					entry: resolve(__dirname, 'src/plugin.js'),
					name: 'dexios-ui',
				},
				rollupOptions: {
					external: ['vue', 'vue-router'],
					output: {
						globals: {
							vue: 'Vue',
						},
					},
				},
			},
		};
	}
});
