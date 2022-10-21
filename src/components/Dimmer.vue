<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Dimmer',
	}
</script>

<template>
	<div class="dexios dimmer" :class="$props">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.dexios {
		&.dimmer {
			@apply absolute backdrop-blur-xs backdrop-contrast-50 backdrop-filter bg-opacity-80 bg-white flex inset-0 items-center justify-center z-100 dark:bg-gray-800;
		}
	}
</style>
