function render(args) {
	const div = document.createElement('div');

	[
		[
			['box', 'dexios-ui-solid-[sky-950]'],
			['box', 'dexios-ui-outline-[sky-950]'],
			['box', 'dexios-ui-soft-[sky]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-900]'],
			['box', 'dexios-ui-outline-[sky-900]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-800]'],
			['box', 'dexios-ui-outline-[sky-800]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-700]'],
			['box', 'dexios-ui-outline-[sky-700]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-600]'],
			['box', 'dexios-ui-outline-[sky-600]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-500]'],
			['box', 'dexios-ui-outline-[sky-500]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-400]'],
			['box', 'dexios-ui-outline-[sky-400]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-300]'],
			['box', 'dexios-ui-outline-[sky-300]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-200]'],
			['box', 'dexios-ui-outline-[sky-200]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-100]'],
			['box', 'dexios-ui-outline-[sky-100]'],
		],
		[
			['box', 'dexios-ui-solid-[sky-50]'],
			['box', 'dexios-ui-outline-[sky-50]'],
		],
	].forEach((items) => {
		const wrapper = document.createElement('div');
		wrapper.classList.add('flex', 'gap-4');

		items.forEach((item) => {
			const div = document.createElement('div');
			div.classList.add(...item);
			div.innerText = 'Text';
			wrapper.appendChild(div);
		});

		div.appendChild(wrapper);
	});

	div.classList.add('flex', 'flex-col', 'gap-4', 'items-start');

	return div;
}

export default {
	args: {
	},
	title: '',
}

export const Colors = {
	render,
}
