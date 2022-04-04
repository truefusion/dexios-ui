<template>
	<article class="modal">
		<VigilButton @click="$refs.modal.open()">Open Modal</VigilButton>
		<VigilModal class="container" :animation="animation" ref="modal">
			<template v-slot="{close}">
				<VigilHeader class="modal-header">Example Modal</VigilHeader>
				<p class="modal-content">Example Content</p>
				<div class="modal-actions">
					<VigilButton @click="close">Close</VigilButton>
				</div>
			</template>
		</VigilModal>
	</article>
</template>

<script>
	export default {
		data() {
			return {
				animation: 'scale',
			};
		},
	}
</script>
