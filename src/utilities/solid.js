import applyCss from '../lib/apply-css';
import parseColor from '../lib/parse-color';
import plugin from "tailwindcss/plugin";

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'dexios-ui-solid': (value) => {
			const color_text = colorForText(value);
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

export function colorForText(value) {
	const { color, shade } = parseColor(value);

	switch (color) {
		case 'black':
			return 'white';
		case 'white':
			return 'black';
		case 'transparent':
			return 'black';
	}

	switch (shade) {
		case '50':
		case '100':
		case '200':
		case '300':
		case '400':
			return `${color}-950`;
	}

	return `${color}-50`;
}
