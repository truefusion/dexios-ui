function render(args) {
	void(args);
	const div = document.createElement('div');

	[
		[
			['ui-box', 'ui-solid-[sky-950]'],
			['ui-box', 'ui-outline-inner-[sky-950_2]'],
			['ui-box', 'ui-outline-outer-[sky-950_4]'],
			['ui-box', 'ui-border-[sky-950]'],
			['ui-box', 'ui-soft-[sky]'],
		],
		[
			['ui-box', 'ui-solid-[sky-900]'],
			['ui-box', 'ui-outline-inner-[sky-900_2]'],
			['ui-box', 'ui-outline-outer-[sky-900_4]'],
			['ui-box', 'ui-border-[sky-900]'],
		],
		[
			['ui-box', 'ui-solid-[sky-800]'],
			['ui-box', 'ui-outline-inner-[sky-800_2]'],
			['ui-box', 'ui-outline-outer-[sky-800_4]'],
			['ui-box', 'ui-border-[sky-800]'],
		],
		[
			['ui-box', 'ui-solid-[sky-700]'],
			['ui-box', 'ui-outline-inner-[sky-700_2]'],
			['ui-box', 'ui-outline-outer-[sky-700_4]'],
			['ui-box', 'ui-border-[sky-700]'],
		],
		[
			['ui-box', 'ui-solid-[sky-600]'],
			['ui-box', 'ui-outline-inner-[sky-600_2]'],
			['ui-box', 'ui-outline-outer-[sky-600_4]'],
			['ui-box', 'ui-border-[sky-600]'],
		],
		[
			['ui-box', 'ui-solid-[sky-500]'],
			['ui-box', 'ui-outline-inner-[sky-500_2]'],
			['ui-box', 'ui-outline-outer-[sky-500_4]'],
			['ui-box', 'ui-border-[sky-500]'],
		],
		[
			['ui-box', 'ui-solid-[sky-400]'],
			['ui-box', 'ui-outline-inner-[sky-400_2]'],
			['ui-box', 'ui-outline-outer-[sky-400_4]'],
			['ui-box', 'ui-border-[sky-400]'],
		],
		[
			['ui-box', 'ui-solid-[sky-300]'],
			['ui-box', 'ui-outline-inner-[sky-300_2]'],
			['ui-box', 'ui-outline-outer-[sky-300_4]'],
			['ui-box', 'ui-border-[sky-300]'],
		],
		[
			['ui-box', 'ui-solid-[sky-200]'],
			['ui-box', 'ui-outline-inner-[sky-200_2]'],
			['ui-box', 'ui-outline-outer-[sky-200_4]'],
			['ui-box', 'ui-border-[sky-200]'],
		],
		[
			['ui-box', 'ui-solid-[sky-100]'],
			['ui-box', 'ui-outline-inner-[sky-100_2]'],
			['ui-box', 'ui-outline-outer-[sky-100_4]'],
			['ui-box', 'ui-border-[sky-100]'],
		],
		[
			['ui-box', 'ui-solid-[sky-50]'],
			['ui-box', 'ui-outline-inner-[sky-50_2]'],
			['ui-box', 'ui-outline-outer-[sky-50_4]'],
			['ui-box', 'ui-border-[sky-50]'],
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
}

export const Colors = {
	render,
}
