var content = [];
var plugins = [];

if (process.env.NODE_ENV == 'development') {
	content = [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	];
	plugins = [
		require('@tailwindcss/typography'),
	];
} else {
	content = [
		"./src/components/**/*.{vue,js,ts,jsx,tsx}",
	];
}

const baseSizes = (function () {
	var ret = {};
	for (var i = 1; i < 21; i++) {
		let x = 16 * i;
		let y = 4 * i;
		ret[String(x)] = y + 'rem';
	}
	return ret;
})();
const sizes = Object.assign({
	'auto' : 'auto',
	'1/6': '16.666667%',
	'1/5': '20%',
	'1/4': '25%',
	'1/3': '33.333333%',
	'2/5': '40%',
	'1/2': '50%',
	'3/5': '60%',
	'2/3': '66.666667%',
	'3/4': '75%',
	'4/5': '80%',
	'0.5': '0.125rem',
	'1': '0.25rem',
	'1.5': '0.375rem',
	'2': '0.5rem',
	'2.5': '0.625rem',
	'3': '0.75rem',
	'3.5': '0.875rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'7': '1.75rem',
	'8': '2rem',
	'9': '2.25rem',
	'10': '2.5rem',
	'11': '2.75rem',
	'12': '3rem',
	'14': '3.5rem',
	'18': '4.5rem',
	'20': '5rem',
	'24': '6rem',
	'28': '7rem',
	'36': '9rem',
	'40': '10rem',
	'44': '11rem',
	'48': '12rem',
	'52': '13rem',
	'56': '14rem',
	'60': '15rem',
	'72': '18rem',
}, baseSizes);

module.exports = {
	content,
	darkMode: 'class', // false or 'media' or 'class'
	important: true,
	plugins,
	theme: {
		extend: {
			backdropBlur: {
				'xs': '2px',
			},
			backdropContrast: {
				'25': '.25',
			},
			borderWidth: {
				'3': '3px',
				'6': '6px',
			},
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
				'4': '4 4 0%',
				'5': '5 5 0%',
				'6': '6 6 0%',
				'7': '7 7 0%',
				'8': '8 8 0%',
				'9': '9 9 0%',
				'10': '10 10 0%',
				'11': '11 11 0%',
				'12': '12 12 0%',
			},
			fontFamily: {
				'fira-sans': 'Fira Sans',
				'fira-sans-condensed': 'Fira Sans Condensed',
				'heebo': ['Heebo', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				'open-sans-condensed': 'Open Sans Condensed',
				'oswald': 'Oswald',
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'source-sans': ['Source Sans Pro', 'sans-serif'],
			},
			height: sizes,
			inset: {
				'-18': '-4.5rem',
				'18': '4.5rem',
			},
			maxHeight: sizes,
			minHeight: sizes,
			maxWidth: sizes,
			minWidth: sizes,
			width: sizes,
			zIndex: {
				'1': 1,
				'60': 60,
				'70': 70,
				'80': 80,
				'90': 90,
				'100': 100,
				'200': 200,
				'300': 300,
				'400': 400,
				'500': 500,
				'600': 600,
				'700': 700,
				'800': 800,
				'900': 900,
				'1000': 1000,
			},
		},
	},
}
