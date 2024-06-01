export default {
	title: 'Components/Input',
}

export const InputBase = {
	render() {
		const input = document.createElement('input');

		input.classList.add('ui-input-base');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputCombined = {
	render() {
		const input = document.createElement('input');

		input.classList.add('ui-input-base', 'ui-input-outline-[zinc-200]', 'ui-solid-[zinc-50]', 'focus:ui-outline-inner-[sky-300_2]', 'focus:ui-solid-[white]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputOutline = {
	render() {
		const input = document.createElement('input');

		input.classList.add('ui-input-base', 'ui-input-outline-[zinc-200]', 'focus:ui-outline-inner-[cyan-300_2]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputSolid = {
	render() {
		const input = document.createElement('input');

		input.classList.add('ui-input-base', 'ui-solid-[zinc-100]', 'focus:ui-solid-[zinc-50]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}
