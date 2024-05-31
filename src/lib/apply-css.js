export default function (...css) {
	return css.reduce((ret, css) => {
		if (Array.isArray(css)) {
			css = css.join(' ');
		}

		return [ret, css].filter(x => x).join(' ');
	}, '@apply');
}
