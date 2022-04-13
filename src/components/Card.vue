<script setup>
	const $props = defineProps({});
</script>

<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Card',
	}
</script>

<template>
	<div class="vigil card" :class="$props">
		<slot></slot>
	</div>
</template>

<style lang="less">
	.vigil {
		&.card {
			@apply bg-white border divide-y flex-col inline-flex min-h-0 max-w-full rounded shadow w-72 dark:bg-gray-700 dark:border-gray-800 dark:divide-gray-800 dark:text-white;

			.card-content {
				@apply p-4;
			}

			.card-description {
				@apply mt-2;
			}

			.card-extra {
				@apply px-4 py-3;
			}

			.card-header:not(.vigil) {
				@apply font-bold text-xl;
			}

			.card-image {
				img {
					@apply block h-auto m-0 w-full;
				}
			}

			.card-meta {
				@apply space-x-1 text-base text-gray-400;
			}
		}
	}
</style>
