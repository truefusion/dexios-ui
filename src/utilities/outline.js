import applyCss from '../lib/apply-css';
import { colorForOutlineText } from '../lib/color-pickers';
import parseOutline from '../lib/parse-outline';
import plugin from 'tailwindcss/plugin';

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'dexios-ui-outline': (value) => {
			var { color, width } = parseOutline(value);

			if (!width) {
				width = 1;
			}

			const color_text = colorForOutlineText(color);
			const outline = [
				`ring-${width}`,
				`ring-${color}`,
				`text-${color_text}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'dexios-ui-outline-inset': (value) => {
			const outline = [
				`dexios-ui-outline-[${value}]`,
				'ring-inset',
			];
			return {
				[applyCss(outline)]: {},
			};
		},
	});
});
