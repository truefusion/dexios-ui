import applyCss from '../lib/apply-css';
import { colorForSoftBackground, colorForSoftTextSecondary } from '../lib/color-pickers';
import plugin from 'tailwindcss/plugin';

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'ui-soft': (value) => {
			const color_bg = colorForSoftBackground(value);
			const color_text = colorForSoftTextSecondary(value);
			const soft = [
				`bg-${color_bg}`,
				`text-${color_text}`,
			];

			return {
				[applyCss(soft)]: {},
			};
		},
	});
});
