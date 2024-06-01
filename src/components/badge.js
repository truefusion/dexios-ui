import applyCss from "../lib/apply-css";
import plugin from "tailwindcss/plugin";

export default plugin(function ({ addComponents }) {
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
			[applyCss(badge_base)]: {},
		},
	});
});
