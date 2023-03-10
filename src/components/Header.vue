<template>
	<div class="dexios header">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.dexios {
		&.header:not(.item) {
			@apply flex font-bold items-center space-x-2 !text-opacity-100 dark:text-white;
		}
	}
</style>
