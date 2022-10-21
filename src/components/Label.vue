<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Label',
		emits: ['close'],
		props: {
			circular: Boolean,
			plain: Boolean,
			secondary: Boolean,
		},
		methods: {
			close() {
				this.$emit('close');
			},
		},
	}
</script>

<template>
	<div class="dexios label" :class="$props">
		<slot :close="close"></slot>
	</div>
</template>

<style lang="less">
	.dexios {
		&.label {
			@apply auto-cols-max cursor-default grid grid-flow-col overflow-hidden rounded self-center text-sm dark:text-white;

			&:not(.plain):not(.secondary) {
				@apply bg-gray-100 dark:bg-gray-800;

				.label-detail {
					@apply bg-black bg-opacity-5 dark:bg-gray-200 dark:bg-opacity-10;
				}
			}

			&.circular {
				@apply rounded-full;
			}

			&.secondary {
				@apply border border-gray-300 dark:border-gray-600;

				.label-detail {
					@apply border-l border-gray-300 dark:border-gray-600;
				}
			}

			> * {
				@apply px-2 py-1;
			}

			.label-detail {
				@apply flex-1;
			}

			.label-close {
				@apply cursor-pointer pl-0;
			}

			.label-icon {
				@apply pr-0;
			}
		}
	}
</style>
