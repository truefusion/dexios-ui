export default function (base_color) {
	var [ prefix, color, shade ] = String(base_color).trim().match(/[^\-]+/g) ?? [];

	if (!shade) {
		shade = color;
		color = prefix;
		prefix = null;
	}

	return {
		color,
		prefix,
		shade,
	};
}
