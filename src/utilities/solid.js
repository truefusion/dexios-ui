import applyCss from '../lib/apply-css';
import plugin from "tailwindcss/plugin";
import { colorForSolidText } from '../lib/color-pickers';

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'ui-solid': (value) => {
			const color_text = colorForSolidText(value);
			const btn_solid = [
				`bg-${value}`,
				`text-${color_text}`,
			];
			return {
				[applyCss(btn_solid)]: {},
			};
		},
	});
});

