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
