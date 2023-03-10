<script setup>
	const $props = defineProps({});
</script>

<template>
	<div class="dexios card">
		<slot></slot>
	</div>
</template>

<style lang="less">
.dexios {
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

			.card-header:not(.dexios) {
				@apply font-bold text-xl;
			}

			.card-image {
				img {
					@apply block h-auto m-0 w-full;
				}
			}

			.card-meta {
				@apply space-x-1 text-sm text-gray-500;
			}
		}
	}
</style>
