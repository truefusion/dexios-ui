import Button from '../components/Button.vue';

const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export const Default = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Button :disabled="disabled">Button</Button>
			</div>
		`,
	}),
};

export const Plain = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Button class="dexios-btn-plain" :disabled="disabled">Button</Button>
			</div>
		`,
	}),
};

export const Primary = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
			    <Button class="dexios-btn-primary" :disabled="disabled">Button</Button>
			</div>
		`,
	}),
};

export const Secondary = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Button class="dexios-btn-secondary" :disabled="disabled">Button</Button>
			</div>
		`,
	}),
};