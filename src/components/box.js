import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents }) {
	const box = [
		'box-border',
		'gap-3',
		'p-4',
		'rounded-md',
	];

	addComponents({
		'.ui-box': {
			[dexios.applyCss(box)]: {},
		},
	});
});
