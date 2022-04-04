<script>
	import { unref } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Button',
		props: {
			circular: Boolean,
			compact: Boolean,
			disabled: Boolean,
			icon: String,
			plain: Boolean,
			primary: Boolean,
			secondary: Boolean,
		},
		computed: {
			classes() {
				return  {
					...this.$props,
					icon: unref(this.iconOnly),
				};
			},
			hasLabel() {
				return Boolean(this.$slots.default);
			},
			iconOnly() {
				return this.icon && !unref(this.hasLabel);
			},
		}
	}
</script>

<template>
	<button class="vigil button" :class="classes" :disabled="disabled" type="button">
		<div class="button-label">
			<VigilIcon :icon="icon" v-if="icon" />
			<div class="button-label-slot">
				<slot></slot>
			</div>
		</div>
		<div class="button-hover">
			<slot name="hover"></slot>
		</div>
	</button>
</template>

<style lang="less">
	.vigil {
		&.button {
			@apply cursor-pointer inline-flex items-center justify-center overflow-hidden px-4 e('py-1.5') relative text-opacity-70 transition-colors;

			&:hover {
				@apply text-opacity-100;

				.icon {
					@apply text-opacity-100;
				}
			}

			.icon {
				@apply text-opacity-70;
			}

			.button-hover {
				@apply absolute flex items-center justify-center inset-0 px-4 py-2 transition whitespace-nowrap;
			}

			.button-label {
				@apply flex items-center justify-center space-x-2 transition;
			}

			&:not(.plain) {
				@apply bg-white border border-gray-300 rounded hover:shadow;
			}

			&.circular {
				@apply rounded-full;
			}

			&.compact {
				@apply px-3 py-1 !important;
			}

			&.icon {
				@apply px-3;

				.button-label-slot {
					@apply hidden;
				}
			}

			&.primary, &.secondary {
				@apply border-0 text-white;

				.icon {
					@apply text-white;
				}
			}

			&.primary {
				@apply bg-sky-600 border-sky-700 hover:bg-sky-700;
			}

			&.secondary {
				@apply bg-gray-700 border-gray-800 hover:bg-gray-800;
			}

			&.plain {
				@apply bg-transparent border-0 hover:shadow-none;
			}

			&[animated=""] {
				.button-hover {
					transform: translatex(-150%);
				}

				&:hover {
					.button-hover {
						transform: translatex(0);
					}

					.button-label {
						transform: translatex(150%);
					}
				}
			}

			&[animated="fade"] {
				.button-hover {
					opacity: 0;
				}

				&:hover {
					.button-hover {
						opacity: 1;
					}

					.button-label {
						opacity: 0;
					}
				}
			}

			&[animated="vertical"] {
				.button-hover {
					transform: translateY(-150%);
				}

				&:hover {
					.button-hover {
						transform: translateY(0);
					}

					.button-label {
						transform: translateY(150%);
					}
				}
			}

			&[disabled] {
				@apply bg-gray-100 pointer-events-none text-opacity-40;
			}
		}
	}
</style>
