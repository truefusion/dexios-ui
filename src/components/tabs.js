import plugin from "tailwindcss/plugin";
import applyCss from "../lib/apply-css";
import parseOutline from "../lib/parse-outline";

export default plugin(function ({ addComponents, matchComponents }) {
	const tab_base = [
		'ui-btn-base',
		'flex',
		'min-w-32',
	];

	addComponents({
		'.ui-tab-base': {
			[applyCss(tab_base)]: {},
		},
	});
	matchComponents({
		'ui-tab-top-underline': (value) => {
			const { color, width } = parseOutline(value);
			const tab_top_underline = [
				`ui-border-bottom-[${color}_${width}]`,
				`-mb-[${width}px]`,
				'rounded-none',
				`text-${color}`,
			];
			return {
				[applyCss(tab_top_underline)]: {},
			};
		},
	});
});
