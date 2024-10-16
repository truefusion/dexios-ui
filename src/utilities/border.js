import plugin from '../lib/plugin';
import parseOutline from '../lib/parse-outline';

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

export default plugin(function ({ dexios, matchUtilities }) {
	matchUtilities({
		'ui-border': (value) => {
			return {
				[dexios.applyCss(mixinBorder(value))]: {},
			};
		},
		'ui-border-bottom': (value) => {
			return {
				[dexios.applyCss('border-0', mixinBorder(value, 'border-b'))]: {},
			};
		},
		'ui-border-left': (value) => {
			return {
				[dexios.applyCss('border-0', mixinBorder(value, 'border-l'))]: {},
			};
		},
		'ui-border-right': (value) => {
			return {
				[dexios.applyCss('border-0', mixinBorder(value, 'border-r'))]: {},
			};
		},
		'ui-border-top': (value) => {
			return {
				[dexios.applyCss('border-0', mixinBorder(value, 'border-t'))]: {},
			};
		},
	});
});
