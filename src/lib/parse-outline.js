export default function parseOutline(value) {
	const [color, width] = String(value).split(' ');
	return {
		color,
		width,
	};
}
