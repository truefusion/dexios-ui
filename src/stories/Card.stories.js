const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Card',
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
				<div class="dexios-card" :aria-disabled="disabled">
					<div class="dexios-card-image">
						<img src="https://placehold.co/350x150" />
					</div>
					<div class="dexios-card-content">
						<div class="dexios-header">Header</div>
						<div class="dexios-card-meta">Meta</div>
						<div class="dexios-card-description">
							<div class="dexios-placeholder">
								<div class="dexios-line"></div>
								<div class="dexios-line"></div>
								<div class="dexios-line"></div>
								<div class="dexios-line"></div>
								<div class="dexios-line"></div>
								<div class="dexios-line"></div>
								<div class="dexios-line w-1/2"></div>
							</div>
						</div>
					</div>
					<div class="dexios-card-extra">Extra</div>
				</div>
			</div>
		`,
	}),
};