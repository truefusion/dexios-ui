<script setup>
	import { computed, unref, useSlots } from 'vue';

	const $props = defineProps({
		circular: Boolean,
		compact: Boolean,
		disabled: Boolean,
		icon: String,
		plain: Boolean,
		primary: Boolean,
		secondary: Boolean,
	});
	const $slots = useSlots();

	const hasLabel = computed(() => {
		return Boolean($slots.default);
	});
	const iconOnly = computed(() => {
		return $props.icon && !unref(hasLabel);
	});
	const classes = computed(() => {
		return  {
			...$props,
			icon: unref(iconOnly),
		};
	});
</script>

<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Button',
	}
</script>

<template>
	<button class="vigil button" :class="classes" :disabled="disabled" type="button">
		<div class="button-label">
			<VigilIcon class="button-icon" :icon="icon" v-if="icon" />
			<slot></slot>
		</div>
		<div class="button-hover">
			<slot name="hover"></slot>
		</div>
	</button>
</template>

<style lang="less">
	.vigil {
		&.button {
			@apply cursor-pointer inline-flex items-center justify-center overflow-hidden px-4 e('py-1.5') relative transition-colors;

			&:hover {
				.button-icon, .button-label {
					@apply text-opacity-100 dark:text-opacity-100;
				}
			}

			.button-icon, .button-label {
				@apply text-gray-800 text-opacity-70 transition-colors dark:text-opacity-70 dark:text-white;
			}

			.button-hover {
				@apply absolute flex items-center justify-center inset-0 px-4 py-2 transition whitespace-nowrap dark:text-white;
			}

			.button-label {
				@apply flex items-center justify-center space-x-2 transition;
			}

			&:not(.plain) {
				@apply bg-white border border-gray-300 rounded hover:shadow dark:bg-transparent dark:border-gray-600;
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

				.button-label {
					@apply text-white;
				}

				.icon {
					@apply text-white;
				}
			}

			&.primary {
				@apply bg-sky-600 border-sky-700 hover:bg-sky-700 dark:bg-sky-600 dark:border-sky-900 dark:hover:bg-sky-900;
			}

			&.secondary {
				@apply bg-gray-700 border-gray-800 hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-800 dark:hover:bg-gray-800;
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
