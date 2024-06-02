export default {
	title: 'Components/Badge',
}

export const BadgeBase = {
	render() {
		const span = document.createElement('span');

		span.classList.add('ui-badge-base');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeOutline = {
	render() {
		const span = document.createElement('span');

		span.classList.add('ui-badge-base', 'ui-outline-inner-[zinc-200]');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeSoft = {
	render() {
		const span = document.createElement('span');

		span.classList.add('ui-badge-base', 'ui-soft-[sky]');
		span.innerText = 'Badge';

		return span;
	},
}

export const BadgeSolid = {
	render() {
		const span = document.createElement('span');

		span.classList.add('ui-badge-base', 'ui-solid-[sky-600]');
		span.innerText = 'Badge';

		return span;
	},
}
