function render(args) {
	const div = document.createElement('div');

	[
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-950]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-950_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-950_4]'],
			['dexios-ui-box', 'dexios-ui-soft-[sky]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-900]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-900_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-900_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-800]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-800_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-800_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-700]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-700_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-700_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-600]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-600_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-600_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-500]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-500_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-500_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-400]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-400_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-400_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-300]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-300_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-300_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-200]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-200_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-200_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-100]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-100_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-100_4]'],
		],
		[
			['dexios-ui-box', 'dexios-ui-solid-[sky-50]'],
			['dexios-ui-box', 'dexios-ui-outline-inner-[sky-50_2]'],
			['dexios-ui-box', 'dexios-ui-outline-outer-[sky-50_4]'],
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
