const plugin = require('tailwindcss/plugin');

var content = [];
var plugins = [
	plugin(({ addVariant }) => {
		addVariant(`dexios-group`, `.group &`);
	}),
	plugin(({ addVariant }) => {
		addVariant(`dexios-plain`, `.dexios-plain &`);
	}),
	plugin(({ addVariant }) => {
		addVariant(`dexios-primary`, `.dexios-primary &`);
	}),
	plugin(({ addVariant }) => {
		addVariant(`dexios-secondary`, `.dexios-secondary &`);
	}),
];

if (process.env.NODE_ENV == 'development') {
	content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
} else {
	content = ['./src/components/**/*.{vue,js,ts,jsx,tsx}'];
}

module.exports = {
	content,
	safelist: ['dexios-'],
	corePlugins: {
		preflight: false,
	},
	darkMode: 'class', // false or 'media' or 'class'
	important: true,
	plugins,
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
};
