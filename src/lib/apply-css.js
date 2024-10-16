function walk(prefix, css) {
	return css.reduce((ret, item) => {
		var p = prefix;

		if (Array.isArray(item)) {
			item = walk(p, item);
			p = '';
		}

		return item ? `${ret} ${p}${item}` : ret;
	}, '').trim();
}

export default function applyCss(prefix, ...css) {
	return `@apply ${walk(prefix, css)}`;
}
