import plugin from "tailwindcss/plugin";
import applyCss from "../lib/apply-css";

export default plugin(function ({ addComponents, matchComponents }) {
	const input_base = [
		'dexios-ui-box',
		'border-0',
		'h-9',
		'outline-none',
		'px-3',
		'py-1',
		'transition',
		'placeholder:text-sm',
	];

	addComponents({
		'.input-base': {
			[applyCss(input_base)]: {},
		},
	});
	matchComponents({
		'input-outline': (value) => {
			const input_outline = [
				`dexios-ui-outline-inner-[${value}]`,
				'shadow-sm',
				'focus:ring-2',
			];

			return {
				[applyCss(input_outline)]: {},
			};
		},
	});
});
