import plugin from '../lib/plugin';

export default plugin(function ({ dexios, matchUtilities }) {
	matchUtilities({
		'ui-soft': (value) => {
			const color_bg = dexios.colorForSoftBackground(value);
			const color_text = dexios.colorForSoftTextSecondary(value);
			const soft = [
				`bg-${color_bg}`,
				`text-${color_text}`,
			];

			return {
				[dexios.applyCss(soft)]: {},
			};
		},
	});
});
