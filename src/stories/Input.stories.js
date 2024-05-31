export default {
	title: 'Components/Input',
}

export const InputBase = {
	render() {
		const input = document.createElement('input');

		input.classList.add('input-base');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputCombined = {
	render() {
		const input = document.createElement('input');

		input.classList.add('input-base', 'input-outline-[zinc-200]', 'dexios-ui-solid-[zinc-50]', 'focus:input-outline-[sky-500]', 'focus:dexios-ui-solid-[white]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputOutline = {
	render() {
		const input = document.createElement('input');

		input.classList.add('input-base', 'input-outline-[zinc-200]', 'focus:input-outline-[sky-500]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}

export const InputSolid = {
	render() {
		const input = document.createElement('input');

		input.classList.add('input-base', 'dexios-ui-solid-[zinc-100]', 'focus:dexios-ui-solid-[zinc-50]');
		input.placeholder = 'Placeholder text';

		return input;
	},
}
