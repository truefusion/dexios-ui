const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Labels',
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
				<label class="dexios-label" :aria-disabled="disabled">
					<span class="dexios-label-text">Label</span>
				</label>
			</div>
		`,
	}),
};

export const Detailed = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<label class="dexios-label" :aria-disabled="disabled">
					<span class="dexios-label-text">Label</span>
					<span class="dexios-label-detail">Detail</span>
				</label>
			</div>
		`,
	}),
};

export const Icon = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<label class="dexios-label" :aria-disabled="disabled">
					<span class="dexios-label-text">
						<i class="mdi mdi-mail"></i>
						<span>Label</span>
					</span>
				</label>
			</div>
		`,
	}),
};

export const Circular = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<label class="dexios-label dexios-circular" :aria-disabled="disabled">
					<span class="dexios-label-text">
						<i class="mdi mdi-mail"></i>
						<span>Label</span>
					</span>
				</label>
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
				<label class="dexios-label dexios-primary" :aria-disabled="disabled">
					<span class="dexios-label-text">Label</span>
					<span class="dexios-label-detail">Detail</span>
				</label>
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
				<label class="dexios-label dexios-secondary" :aria-disabled="disabled">
					<span class="dexios-label-text">Label</span>
					<span class="dexios-label-detail">Detail</span>
				</label>
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
				<div class="dexios-labels">
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">
							<i class="mdi mdi-mail"></i>
							<span>Label</span>
						</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
						<span class="dexios-label-detail">Detail</span>
					</label>
				</div>
			</div>
		`,
	}),
};

export const GroupPrimary = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-labels dexios-primary">
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">
							<i class="mdi mdi-mail"></i>
							<span>Label</span>
						</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
						<span class="dexios-label-detail">Detail</span>
					</label>
				</div>
			</div>
		`,
	}),
};

export const GroupSecondary = {
	args,
	render: (args) => ({
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<div class="dexios-labels dexios-secondary">
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">
							<i class="mdi mdi-mail"></i>
							<span>Label</span>
						</span>
					</label>
					<label class="dexios-label" :aria-disabled="disabled">
						<span class="dexios-label-text">Label</span>
						<span class="dexios-label-detail">Detail</span>
					</label>
				</div>
			</div>
		`,
	}),
};