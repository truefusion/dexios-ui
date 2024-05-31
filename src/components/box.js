import plugin from "tailwindcss/plugin";
import applyCss from "../lib/apply-css";

export default plugin(function ({ addComponents }) {
	const box = [
		'box-border',
		'font-sans',
		'p-4',
		'rounded-md',
	];

	addComponents({
		'.dexios-ui-box': {
			[applyCss(box)]: {},
		},
	});
});
