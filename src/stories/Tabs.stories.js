const nl = document.createTextNode('\n');
const nlt = document.createTextNode('\n\t');

export default {
	title: 'Components/Tabs',
}

export const TabsBase = {
	render() {
		const tab_bar = document.createElement('div');
		const tabs = new Array(4).fill();

		tab_bar.classList.add('flex');

		tabs.forEach((tab, idx) => {
			tab_bar.appendChild(nlt.cloneNode());
			tab = document.createElement('div');
			tab.classList.add('ui-tab-base');
			tab.innerText = `Tab ${idx+1}`;
			tab_bar.appendChild(tab);
		});

		tab_bar.appendChild(nl.cloneNode());

		return tab_bar;
	},
}

export const TabsSoft = {
	render() {
		const tab_bar = document.createElement('div');
		const tabs = new Array(4).fill();

		tab_bar.classList.add('flex', 'gap-2', 'text-zinc-500');

		tabs.forEach((tab, idx) => {
			tab_bar.appendChild(nlt.cloneNode());
			tab = document.createElement('div');
			tab.classList.add('ui-tab-base', 'hover:ui-soft-[zinc]', 'aria-selected:ui-soft-[indigo]');
			tab.innerText = `Tab ${idx+1}`;

			if (idx == 2) {
				tab.ariaSelected = true;
			}

			tab_bar.appendChild(tab);
		});

		tab_bar.appendChild(nl.cloneNode());

		return tab_bar;
	},
}

export const TabsUnderlined = {
	render() {
		const tab_bar = document.createElement('div');
		const tabs = new Array(4).fill();

		tab_bar.classList.add('flex', 'items-center', 'ui-border-bottom-[zinc-300_2]', 'text-zinc-500');

		tabs.forEach((tab, idx) => {
			tab_bar.appendChild(nlt.cloneNode());
			tab = document.createElement('div');
			tab.classList.add('ui-tab-base', 'hover:text-zinc-700', 'aria-selected:ui-tab-top-underline-[indigo-700_2]');
			tab.innerText = `Tab ${idx+1}`;

			if (idx == 2) {
				tab.ariaSelected = true;
			}

			tab_bar.appendChild(tab);
		});

		tab_bar.appendChild(nl.cloneNode());

		return tab_bar;
	},
}
