import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents, matchComponents }) {
	const divider_base = [
		'after:bg-zinc-200',
		'after:content-[""]',
		'after:flex',
		'after:flex-1',
		'before:bg-zinc-200',
		'before:content-[""]',
		'before:flex',
		'before:flex-1',
		'flex',
		'items-center',
	];
	const divider_horizontal = [
		'after:h-px',
		'before:h-px',
	];
	const divider_vertical = [
		'after:w-px',
		'before:w-px',
		'flex-col',
	];

	addComponents({
		'.ui-divider': {
			[dexios.applyCss(divider_base, divider_horizontal)]: {},
		},
		'.ui-divider-vertical': {
			[dexios.applyCss(divider_base, divider_vertical)]: {},
		},
	});
	matchComponents({
		'ui-divider': (value) => {
			const divider_horizontal = [
				'ui-divider',
				`after:bg-${value}`,
				`before:bg-${value}`,
			];
			return {
				[dexios.applyCss(divider_horizontal)]: {},
			};
		},
		'ui-divider-vertical': (value) => {
			const divider_vertical = [
				'ui-divider-vertical',
				`after:bg-${value}`,
				`before:bg-${value}`,
			];
			return {
				[dexios.applyCss(divider_vertical)]: {},
			};
		},
	});
});
