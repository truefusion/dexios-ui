import applyCss from "../lib/apply-css";
import plugin from "tailwindcss/plugin";

export default plugin(function ({ addComponents }) {
	const alert_base = [
		'dexios-ui-box',
		'gap-2',
		'py-3',
	];

	addComponents({
		'.alert-base': {
			[applyCss(alert_base)]: {},
		},
	});
});
