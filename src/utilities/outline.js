import plugin from '../lib/plugin';

export default plugin(function ({ dexios, matchUtilities }) {
	matchUtilities({
		'ui-outline-inner': (value) => {
			var { color, width } = dexios.parseOutline(value);

			if (!width) {
				width = 1;
			}

			const outline = [
				`ring-${width}`,
				'ring-inset',
				`ring-${color}`,
			];

			return {
				[dexios.applyCss(outline)]: {},
			};
		},
		'ui-outline-outer': (value) => {
			var { color, width } = dexios.parseOutline(value);

			if (!width) {
				width = 1;
			}

			const outline = [
				'outline',
				'outline-offset-0',
				`outline-${width}`,
				`outline-${color}`,
			];

			return {
				[dexios.applyCss(outline)]: {},
			};
		},
	});
});
