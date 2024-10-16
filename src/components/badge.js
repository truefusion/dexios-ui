import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents }) {
	const badge_base = [
		'ui-box',
		'gap-2',
		'inline-flex',
		'items-center',
		'px-2',
		'py-1',
		'text-xs',
	];

	addComponents({
		'.ui-badge-base': {
			[dexios.applyCss(badge_base)]: {},
		},
	});
});
