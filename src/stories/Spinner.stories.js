const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Spinner',
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export const Default = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-spinner h-8 w-8" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};