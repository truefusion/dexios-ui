<template>
	<article class="modal">
		<DexiosButton @click="open">Open Modal</DexiosButton>
		<DexiosModal class="w-96" :animation="animation" ref="modal">
			<template v-slot="{ close, confirm }">
				<DexiosHeader class="modal-header">Example Modal</DexiosHeader>
				<p class="modal-content">Example Content</p>
				<div class="modal-actions">
					<DexiosButton class="secondary" @click="close">Close</DexiosButton>
					<DexiosButton class="primary" @click="confirm">Confirm</DexiosButton>
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
		methods: {
			open() {
				this.$refs.modal.open().then(() => {
					console.log('confirmed');
				});
			},
		},
	}
</script>
