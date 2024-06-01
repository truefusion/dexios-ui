import applyCss from '../lib/apply-css';
import parseOutline from '../lib/parse-outline';
import plugin from 'tailwindcss/plugin';

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'ui-outline-inner': (value) => {
			var { color, width } = parseOutline(value);

			if (!width) {
				width = 1;
			}

			const outline = [
				`ring-${width}`,
				'ring-inset',
				`ring-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'ui-outline-outer': (value) => {
			var { color, width } = parseOutline(value);

			if (!width) {
				width = 1;
			}

			const outline = [
				'outline',
				`outline-${width}`,
				`outline-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
	});
});
