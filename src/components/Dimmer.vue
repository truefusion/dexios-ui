<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Dimmer',
	}
</script>

<template>
	<div class="vigil dimmer" :class="$props">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.vigil {
		&.dimmer {
			@apply absolute backdrop-blur-xs backdrop-contrast-50 backdrop-filter bg-opacity-80 bg-white flex inset-0 items-center justify-center z-100;
		}
	}
</style>
