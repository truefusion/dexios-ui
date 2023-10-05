import Button from '../components/Button.vue';
import Buttons from '../components/Buttons.vue';

const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Button Groups',
	component: Buttons,
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
			Buttons,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Buttons :disabled="disabled">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Buttons>
			</div>
		`,
	}),
};

export const Vertical = {
	args,
	render: (args) => ({
		components: {
			Button,
			Buttons,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Buttons class="dexios-vertical" :disabled="disabled">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Buttons>
			</div>
		`,
	}),
};

export const Plain = {
	args,
	render: (args) => ({
		components: {
			Button,
			Buttons,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Buttons class="dexios-plain" :disabled="disabled">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Buttons>
			</div>
		`,
	}),
};

export const Primary = {
	args,
	render: (args) => ({
		components: {
			Button,
			Buttons,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Buttons class="dexios-primary" :disabled="disabled">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Buttons>
			</div>
		`,
	}),
};

export const Secondary = {
	args,
	render: (args) => ({
		components: {
			Button,
			Buttons,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Buttons class="dexios-secondary" :disabled="disabled">
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Buttons>
			</div>
		`,
	}),
};