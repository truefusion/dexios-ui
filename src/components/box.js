import plugin from "tailwindcss/plugin";
import applyCss from "../lib/apply-css";

export default plugin(function ({ addComponents }) {
	const box = [
		'box-border',
		'gap-3',
		'font-sans',
		'p-4',
		'rounded-md',
	];

	addComponents({
		'.ui-box': {
			[applyCss(box)]: {},
		},
	});
});
