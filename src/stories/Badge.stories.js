export default {
	title: 'Components/Badge',
}

export const BadgeBase = {
	render() {
		const span = document.createElement('span');

		span.classList.add('badge-base');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeOutline = {
	render() {
		const span = document.createElement('span');

		span.classList.add('badge-base', 'dexios-ui-outline-inner-[zinc-200]');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeSoft = {
	render() {
		const span = document.createElement('span');

		span.classList.add('badge-base', 'dexios-ui-soft-[sky]');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeSolid = {
	render() {
		const span = document.createElement('span');

		span.classList.add('badge-base', 'dexios-ui-solid-[sky-600]');
		span.innerText = 'Badge';

		return span;
	},
}
