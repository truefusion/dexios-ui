import default_theme from 'tailwindcss/defaultTheme';
import preset from './src/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/stories/*.{js,mdx}',
	],
	corePlugins: {
		preflight: false,
	},
	presets: [
		preset,
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...default_theme.fontFamily.sans],
				title: ['Roboto Condensed', ...default_theme.fontFamily.sans],
			},
		},
	},
}

