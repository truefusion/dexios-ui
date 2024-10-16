import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents, matchComponents }) {
	const tab_base = [
		'ui-btn-base',
		'flex',
		'min-w-32',
	];

	addComponents({
		'.ui-tab-base': {
			[dexios.applyCss(tab_base)]: {},
		},
	});
	matchComponents({
		'ui-tab-top-underline': (value) => {
			const { color, width } = dexios.parseOutline(value);
			const tab_top_underline = [
				`ui-border-bottom-[${color}_${width}]`,
				`-mb-[${width}px]`,
				'rounded-none',
				`text-${color}`,
			];
			return {
				[dexios.applyCss(tab_top_underline)]: {},
			};
		},
	});
});
