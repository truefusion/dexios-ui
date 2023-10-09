const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Dividers',
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
				<div class="dexios-divide-x w-80" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};

export const Vertical = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-divide-y h-44" :aria-disabled="disabled">
				</div>
			</div>
		`,
	}),
};

export const Content = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-divide-x gap-4 w-80" :aria-disabled="disabled">
					Content
				</div>
			</div>
		`,
	}),
};

export const ContentVertical = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-divide-y gap-4 h-44" :aria-disabled="disabled">
					Content
				</div>
			</div>
		`,
	}),
};