import plugin from "tailwindcss/plugin";
import applyCss from "../lib/apply-css";

export default plugin(function ({ addComponents, matchComponents }) {
	const input_base = [
		'ui-box',
		'border-0',
		'h-9',
		'outline-none',
		'px-3',
		'py-1',
		'transition',
		'placeholder:text-sm',
	];

	addComponents({
		'.ui-input-base': {
			[applyCss(input_base)]: {},
		},
	});
	matchComponents({
		'ui-input-outline': (value) => {
			const input_outline = [
				`ui-outline-inner-[${value}]`,
				'shadow-sm',
			];

			return {
				[applyCss(input_outline)]: {},
			};
		},
	});
});
