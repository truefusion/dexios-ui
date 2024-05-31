export default function (value) {
	const [color, width] = String(value).split(' ');
	return {
		color,
		width,
	};
}
