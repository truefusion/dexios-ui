const nl = document.createTextNode('\n');
const nlt = document.createTextNode('\n\t');

export default {
	title: 'Components/Button',
}

export const ButtonBase = {
	render() {
		const button = document.createElement('button');

		button.classList.add('btn-base');
		button.innerText = 'Button';

		return button;
	},
}

export const ButtonCombined = {
	render() {
		const div = document.createElement('div');
		const btn_one = document.createElement('button');
		const btn_two = document.createElement('button');
		const btn_three = document.createElement('button');

		div.classList.add('flex', 'gap-2');

		btn_one.innerText = 'Button';
		btn_two.innerText = 'Button';
		btn_three.innerText = 'Button';

		btn_one.classList.add('btn-base', 'btn-outline-[zinc-300]', 'hover:dexios-ui-solid-[zinc-100]');
		btn_two.classList.add('btn-base', 'btn-outline-[zinc-300]', 'btn-solid-[zinc-100]', 'hover:dexios-ui-outline-[zinc-400]');
		btn_three.classList.add('btn-base', 'btn-outline-[zinc-300]', 'btn-solid-[zinc-50]', 'hover:dexios-ui-outline-[sky-300]', 'hover:dexios-ui-solid-[sky-50]');

		div.appendChild(nlt.cloneNode());
		div.appendChild(btn_one);
		div.appendChild(nlt.cloneNode());
		div.appendChild(btn_two);
		div.appendChild(nlt.cloneNode());
		div.appendChild(btn_three);
		div.appendChild(nl.cloneNode());

		return div;
	},
}

export const ButtonOutline = {
	render() {
		const button = document.createElement('button');

		button.classList.add('btn-base', 'btn-outline-[zinc-300]', 'hover:dexios-ui-outline-[zinc-400]');
		button.innerText = 'Button';

		return button;
	},
}

export const ButtonSolid = {
	render() {
		const div = document.createElement('div');
		const btn_one = document.createElement('button');
		const btn_two = document.createElement('button');

		div.classList.add('flex', 'gap-2');

		btn_one.innerText = 'Button';
		btn_two.innerText = 'Button';

		btn_one.classList.add('btn-base', 'btn-solid-[zinc-700]', 'hover:dexios-ui-solid-[zinc-900]');
		btn_two.classList.add('btn-base', 'btn-solid-[zinc-100]', 'hover:dexios-ui-solid-[zinc-200]');

		div.appendChild(nlt.cloneNode());
		div.appendChild(btn_one);
		div.appendChild(nlt.cloneNode());
		div.appendChild(btn_two);
		div.appendChild(nl.cloneNode());

		return div;
	},
}
