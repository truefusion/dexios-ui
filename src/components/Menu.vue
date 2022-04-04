<script setup>
	import { computed, ref } from 'vue';
	import Base from './../lib/Base.js';

	const $el = ref(null);

	const props = defineProps({
		...Base.props,
		flat: Boolean,
		plain: Boolean,
		pointing: Boolean,
		secondary: Boolean,
		tabular: Boolean,
		vertical: Boolean,
	});

	const standard = computed(() => {
		var {plain, flat, secondary, tabular } = props;
		return ![plain, flat, secondary, tabular].some(x => x);
	});

	defineExpose({
		$el,
	});
</script>

<template>
	<nav class="vigil menu" :class="{...props, standard}" ref="$el">
		<slot></slot>
	</nav>
</template>

<style lang="less">
	.vigil {
		&.menu {
			@apply cursor-default flex;

			> .input {
				@apply ring-transparent z-1;
			}

			> .item {
				@apply px-4 e('py-1.5');

				&.stretch {
					@apply flex-1;
				}
			}

			&.standard {
				@apply bg-white border rounded shadow dark:bg-gray-800 dark:border-gray-700 dark:divide-gray-700;

				&:not(.vertical) {
					@apply divide-x;
				}

				&.vertical {
					@apply divide-y;
				}

				> * {
					@apply border-0 border-gray-200 !rounded-none;
				}

				.dropdown:not(.open) {
					&.selection {
						.dropdown-label-wrapper {
							@apply border-transparent;
						}
					}
				}

				.input.icon-right {
					input {
						@apply pl-4;
					}

					.icon {
						@apply mx-3;
					}
				}
			}

			&.standard, &.flat {
				> .active, > .link {
					@apply hover:bg-gray-50 dark:hover:bg-gray-700;
				}

				> .active {
					@apply bg-gray-50;
				}
			}

			&.flat {
				@apply space-x-2;

				> .link {
					@apply rounded-md;
				}
			}

			&.tabular {
				@apply border-b border-gray-300;

				> * {
					@apply -mb-px;
				}

				> .active {
					@apply bg-white border border-b-0 border-gray-300 rounded-t;
				}
			}

			&.secondary {
				@apply border-b-2;

				> .link {
					@apply border-b-2;
					margin-bottom: -2px;

					&.active {
						@apply border-gray-800;
					}
				}
			}

			&.vertical {
				@apply flex-col;

				> .menu {
					@apply p-2;
				}
			}
		}
	}
</style>
