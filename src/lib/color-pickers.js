import parseColor from './parse-color';

export function colorForOutlineText(value) {
	const { color } = parseColor(value);

	switch (color) {
		case 'black':
			return 'black';
		case 'transparent':
			return 'transparent';
		case 'white':
			return 'white';
	}

	return `${color}-950`;
}

export function colorForSoftBackground(value) {
	const { color } = parseColor(value);

	switch (color) {
		case 'black':
			return 'black/5';
		case 'white':
			return 'white/5';
		case 'transparent':
			return 'transparent';
	}

	return `${color}-50`;
}

export function colorForSoftTextPrimary(value) {
	const { color } = parseColor(value);

	switch (color) {
		case 'black':
			return 'black/80';
		case 'white':
			return 'white/80';
		case 'transparent':
			return 'transparent';
	}

	return `${color}-800`;
}

export function colorForSoftTextSecondary(value) {
	const { color } = parseColor(value);

	switch (color) {
		case 'black':
			return 'black/50';
		case 'white':
			return 'white/50';
		case 'transparent':
			return 'transparent';
	}

	return `${color}-700`;
}

export function colorForSolidBackground(value) {
	const { color, shade } = parseColor(value);

	return shade ? `${color}-${shade}` : color;
}

export function colorForSolidText(value) {
	const { color, shade } = parseColor(value);

	switch (color) {
		case 'black':
			return 'white';
		case 'white':
			return 'black';
		case 'transparent':
			return 'transparent';
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
