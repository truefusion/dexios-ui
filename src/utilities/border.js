import applyCss from '../lib/apply-css';
import parseOutline from '../lib/parse-outline';
import plugin from 'tailwindcss/plugin';

function mixinBorder(value, prefix = 'border') {
	var { color, width } = parseOutline(value);
	var border = prefix;

	if (width > 1) {
		border = `${prefix}-${width}`;
	}

	return [
		border,
		'border-solid',
		`border-${color}`,
	];
}

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'ui-border': (value) => {
			return {
				[applyCss(mixinBorder(value))]: {},
			};
		},
		'ui-border-bottom': (value) => {
			return {
				[applyCss('border-0', mixinBorder(value, 'border-b'))]: {},
			};
		},
		'ui-border-left': (value) => {
			return {
				[applyCss('border-0', mixinBorder(value, 'border-l'))]: {},
			};
		},
		'ui-border-right': (value) => {
			return {
				[applyCss('border-0', mixinBorder(value, 'border-r'))]: {},
			};
		},
		'ui-border-top': (value) => {
			return {
				[applyCss('border-0', mixinBorder(value, 'border-t'))]: {},
			};
		},
	});
});
