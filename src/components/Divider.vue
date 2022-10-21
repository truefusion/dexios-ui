<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		props: {
			inline: Boolean,
			vertical: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = slots.default?.() ?? [];

				return h('div', {
					class: {
						dexios: true,
						divider: true,
						closed: !children.length,
						...props,
					},
				}, children);
			};
		},
	}
</script>

<style lang="less">
	.dexios {
		&.divider {
			@apply flex items-center justify-center leading-none dark:text-white;

			&::after, &::before {
				@apply bg-gray-200 block flex-1 dark:bg-gray-600;
				content: '';
			}

			&:not(.vertical) {
				&::after, &::before {
					@apply h-px;
				}

				&:not(.closed) {
					&::after {
						@apply ml-4;
					}

					&::before {
						@apply mr-4;
					}
				}
			}

			&.inline {
				@apply absolute flex-col h-auto e('left-1/2') relative top-0 w-auto;
			}

			&.vertical {
				@apply absolute flex-col h-full e('left-1/2') top-0 transform e('-translate-x-1/2') w-auto;

				&::after, &::before {
					@apply w-px;
				}

				&:not(.closed) {
					&::after {
						@apply mt-4;
					}

					&::before {
						@apply mb-4;
					}
				}
			}
		}
	}
</style>
