import plugin from '../lib/plugin';

export default plugin(function ({ dexios, addComponents }) {
	const alert_base = [
		'ui-box',
		'gap-2',
		'py-3',
	];

	addComponents({
		'.ui-alert-base': {
			[dexios.applyCss(alert_base)]: {},
		},
	});
});
