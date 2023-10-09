const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Segments',
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
				<div class="dexios-segment w-80" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};

export const Raised = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-segment dexios-raised w-80" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};

export const Stacked = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-segment dexios-stacked w-80" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};