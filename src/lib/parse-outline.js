export default function (value) {
	const [color, width] = String(value).split('_');
	return {
		color,
		width,
	};
}
