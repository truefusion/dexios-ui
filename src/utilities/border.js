import applyCss from '../lib/apply-css';
import parseOutline from '../lib/parse-outline';
import plugin from 'tailwindcss/plugin';

export default plugin(function ({ matchUtilities }) {
	matchUtilities({
		'ui-border': (value) => {
			var { color, width } = parseOutline(value);
			var border = 'border';

			if (width > 1) {
				border = `border-${width}`;
			}

			const outline = [
				border,
				'border-solid',
				`border-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'ui-border-bottom': (value) => {
			var { color, width } = parseOutline(value);
			var border = 'border-b';

			if (width > 1) {
				border = `border-b-${width}`;
			}

			const outline = [
				'border-0',
				border,
				'border-solid',
				`border-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'ui-border-left': (value) => {
			var { color, width } = parseOutline(value);
			var border = 'border-l';

			if (width > 1) {
				border = `border-l-${width}`;
			}

			const outline = [
				'border-0',
				border,
				'border-solid',
				`border-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'ui-border-right': (value) => {
			var { color, width } = parseOutline(value);
			var border = 'border-r';

			if (width > 1) {
				border = `border-r-${width}`;
			}

			const outline = [
				'border-0',
				border,
				'border-solid',
				`border-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
		'ui-border-top': (value) => {
			var { color, width } = parseOutline(value);
			var border = 'border-t';

			if (width > 1) {
				border = `border-t-${width}`;
			}

			const outline = [
				'border-0',
				border,
				'border-solid',
				`border-${color}`,
			];

			return {
				[applyCss(outline)]: {},
			};
		},
	});
});
