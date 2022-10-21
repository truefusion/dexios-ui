<template>
	<article class="modal">
		<DexiosButton @click="$refs.modal.open()">Open Modal</DexiosButton>
		<DexiosModal class="container" :animation="animation" ref="modal">
			<template v-slot="{close}">
				<DexiosHeader class="modal-header">Example Modal</DexiosHeader>
				<p class="modal-content">Example Content</p>
				<div class="modal-actions">
					<DexiosButton @click="close">Close</DexiosButton>
				</div>
			</template>
		</DexiosModal>
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
