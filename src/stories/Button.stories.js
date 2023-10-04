import Button from '../components/Button.vue';

const args = {
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
		template: '<Button :disabled="disabled">Button</Button>',
	}),
};

export const Plain = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: '<Button class="dexios-btn-plain" :disabled="disabled">Button</Button>',
	}),
};

export const Primary = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: '<Button class="dexios-btn-primary" :disabled="disabled">Button</Button>',
	}),
};

export const Secondary = {
	args,
	render: (args) => ({
		components: {
			Button,
		},
		setup: () => args,
		template: '<Button class="dexios-btn-secondary" :disabled="disabled">Button</Button>',
	}),
};
