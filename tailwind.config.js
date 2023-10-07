var content = [];
var plugins = [];

if (process.env.NODE_ENV == 'development') {
	content = [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	];
} else {
	content = [
		"./src/components/**/*.{vue,js,ts,jsx,tsx}",
	];
}

module.exports = {
	content,
	safelist: [
		'dexios-',
	],
	corePlugins: {
		preflight: false,
	},
	darkMode: 'class', // false or 'media' or 'class'
	important: true,
	plugins,
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
		},
	},
}
