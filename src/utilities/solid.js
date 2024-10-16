import plugin from '../lib/plugin';

export default plugin(({ dexios, matchUtilities }) => {
	matchUtilities({
		'ui-solid': (value) => {
			const color_text = dexios.colorForSolidText(value);
			const btn_solid = [
				`bg-${value}`,
				`text-${color_text}`,
			];
			return {
				[dexios.applyCss(btn_solid)]: {},
			};
		},
	});
});

