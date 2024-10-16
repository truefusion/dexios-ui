import plugin from 'tailwindcss/plugin';
import applyCss from './apply-css';
import * as color_pickers from './color-pickers';
import parseColor from './parse-color';
import parseOutline from './parse-outline';

function dexios({ config }) {
	const prefix = config('prefix');

	return Object.freeze({
		applyCss(...css) {
			return applyCss(prefix, ...css);
		},
		...color_pickers,
		parseColor,
		parseOutline,
	});
}

export default function (fn) {
	return plugin((ctx) => {
		fn({
			dexios: dexios(ctx),
			...ctx
		});
	});
}
