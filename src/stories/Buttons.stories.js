const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Buttons',
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
				<button class="dexios-btn" :aria-disabled="disabled">Button</button>
			</div>
		`,
	}),
};

export const Plain = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<button class="dexios-btn dexios-plain" :aria-disabled="disabled">Button</button>
			</div>
		`,
	}),
};

export const Primary = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<button class="dexios-btn dexios-primary-hover" :aria-disabled="disabled">Button</button>
			</div>
		`,
	}),
};

export const Secondary = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<button class="dexios-btn dexios-secondary-hover" :aria-disabled="disabled">Button</button>
			</div>
		`,
	}),
};

export const Group = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-btns group" :aria-disabled="disabled">
					<div class="dexios-btn">One</div>
					<div class="dexios-btn">Two</div>
					<div class="dexios-btn">Three</div>
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
			<div class="group p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-btns dexios-vertical" :aria-disabled="disabled">
					<div class="dexios-btn">One</div>
					<div class="dexios-btn">Two</div>
					<div class="dexios-btn">Three</div>
				</div>
			</div>
		`,
	}),
};

export const PlainGroup = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-btns dexios-plain" :aria-disabled="disabled">
					<div class="dexios-btn">One</div>
					<div class="dexios-btn">Two</div>
					<div class="dexios-btn">Three</div>
				</div>
			</div>
		`,
	}),
};

export const PrimaryGroup = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-btns dexios-primary" :aria-disabled="disabled">
					<div class="dexios-btn">One</div>
					<div class="dexios-btn">Two</div>
					<div class="dexios-btn">Three</div>
				</div>
			</div>
		`,
	}),
};

export const SecondaryGroup = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-btns dexios-secondary" :aria-disabled="disabled">
					<div class="dexios-btn">One</div>
					<div class="dexios-btn">Two</div>
					<div class="dexios-btn">Three</div>
				</div>
			</div>
		`,
	}),
};