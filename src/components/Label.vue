<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Label',
		emits: ['close'],
		props: {
			circular: Boolean,
			plain: Boolean,
		},
		methods: {
			close() {
				this.$emit('close');
			},
		},
	}
</script>

<template>
	<div class="vigil label" :class="$props">
		<slot :close="close"></slot>
	</div>
</template>

<style lang="less">
	.vigil {
		&.label {
			@apply auto-cols-max cursor-default grid grid-flow-col overflow-hidden rounded text-sm;

			&:not(.plain) {
				@apply bg-gray-100;

				.label-detail {
					@apply bg-black bg-opacity-10 dark:bg-white;
				}
			}

			&.circular {
				@apply rounded-full;
			}

			&.plain {
				@apply border border-gray-300;

				.label-detail {
					@apply border-l border-gray-300;
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
