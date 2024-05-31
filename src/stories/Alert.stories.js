const nl = document.createTextNode('\n');
const nlt = document.createTextNode('\n\t');

export default {
	title: 'Components/Alert',
}

export const AlertBase = {
	render() {
		const div = document.createElement('div');
		const message = document.createElement('div');
		const title = document.createElement('div');

		div.classList.add('alert-base', 'flex', 'flex-col', 'gap-2');
		div.appendChild(nlt.cloneNode());
		div.appendChild(title);
		div.appendChild(nlt.cloneNode());
		div.appendChild(message);
		div.appendChild(nl.cloneNode());

		title.classList.add('font-bold');
		title.innerText = 'Title';

		message.innerText = 'Message.';

		return div;
	},
}

export const AlertOutline = {
	render() {
		const div = document.createElement('div');
		const message = document.createElement('div');
		const nl = document.createTextNode('\n');
		const nlt = document.createTextNode('\n\t');
		const title = document.createElement('div');

		div.classList.add('alert-base', 'dexios-ui-outline-inner-[zinc-200]', 'flex', 'flex-col', 'gap-2');
		div.appendChild(nlt.cloneNode());
		div.appendChild(title);
		div.appendChild(nlt.cloneNode());
		div.appendChild(message);
		div.appendChild(nl.cloneNode());

		title.classList.add('font-bold');
		title.innerText = 'Title';

		message.innerText = 'Message.';

		return div;
	},
}

export const AlertSoft = {
	render() {
		const div = document.createElement('div');
		const message = document.createElement('div');
		const nl = document.createTextNode('\n');
		const nlt = document.createTextNode('\n\t');
		const title = document.createElement('div');

		div.classList.add('alert-base', 'dexios-ui-soft-[sky]', 'flex', 'flex-col', 'gap-2');
		div.appendChild(nlt.cloneNode());
		div.appendChild(title);
		div.appendChild(nlt.cloneNode());
		div.appendChild(message);
		div.appendChild(nl.cloneNode());

		title.classList.add('font-bold', 'text-sky-800');
		title.innerText = 'Title';

		message.innerText = 'Message.';

		return div;
	},
}

export const AlertSolid = {
	render() {
		const div = document.createElement('div');
		const message = document.createElement('div');
		const nl = document.createTextNode('\n');
		const nlt = document.createTextNode('\n\t');
		const title = document.createElement('div');

		div.classList.add('alert-base', 'dexios-ui-solid-[red-600]', 'flex', 'flex-col', 'gap-2');
		div.appendChild(nlt.cloneNode());
		div.appendChild(title);
		div.appendChild(nlt.cloneNode());
		div.appendChild(message);
		div.appendChild(nl.cloneNode());

		title.classList.add('font-bold', 'text-sky-50');
		title.innerText = 'Title';

		message.innerText = 'Message.';

		return div;
	},
}
