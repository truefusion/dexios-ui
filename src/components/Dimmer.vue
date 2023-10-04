<template>
	<div class="dexios dimmer">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.dexios {
		&.dimmer {
			@apply absolute backdrop-contrast-50 backdrop-filter bg-opacity-80 bg-white flex inset-0 items-center justify-center dark:bg-gray-800;
		}
	}
</style>
