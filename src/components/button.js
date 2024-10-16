import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents, matchComponents }) {
	const btn_base = [
		`ui-box`,
		'bg-transparent',
		'border-0',
		'cursor-pointer',
		'font-medium',
		'gap-2',
		'inline-flex',
		'items-center',
		'justify-center',
		'py-2',
		'transition',
		'whitespace-nowrap',
	];

	addComponents({
		'.ui-btn-base': {
			[dexios.applyCss(btn_base)]: {},
		},
	});
	matchComponents({
		'ui-btn-outline': (value) => {
			const btn_outline = [
				`ui-outline-inner-[${value}]`,
				'shadow-sm',
			];
			return {
				[dexios.applyCss(btn_outline)]: {},
			};
		},
		'ui-btn-solid': (value) => {
			const btn_solid = [
				`ui-solid-[${value}]`,
				'shadow-sm',
			];
			return {
				[dexios.applyCss(btn_solid)]: {},
			};
		},
	});
});
