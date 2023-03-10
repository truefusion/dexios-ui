<script setup>
	import { computed, ref } from 'vue';

	const $el = ref(null);
	const $props = defineProps({
		flat: Boolean,
		plain: Boolean,
		pointing: Boolean,
		secondary: Boolean,
		tabular: Boolean,
		vertical: Boolean,
	});

	const standard = computed(() => {
		var { plain, flat, secondary, tabular } = $props;
		return ![plain, flat, secondary, tabular].some(x => x);
	});

	defineExpose({
		$el,
	});
</script>

<template>
	<nav class="dexios menu" :class="{...$props, standard}" ref="$el">
		<slot></slot>
	</nav>
</template>

<style lang="less">
	.dexios {
		&.menu {
			@apply cursor-default flex;

			> .header {
				@apply px-4 py-2;
			}

			> .item {
				@apply px-4 py-2;

				&.item-spacer {
					@apply flex-1;
				}
			}

			&.standard {
				@apply bg-white border rounded shadow dark:bg-gray-700 dark:border-gray-800 dark:divide-gray-800;

				&:not(.vertical) {
					@apply divide-x;
				}

				&.vertical {
					@apply divide-y;
				}

				> * {
					@apply border-0 border-gray-300 !rounded-none;
				}

				> .dropdown:not(.open) {
					&.selection {
						.dropdown-label {
							@apply ring-transparent;
						}
					}
				}

				> .input:not(.plain) {
					@apply bg-transparent ring-transparent z-1 focus-within:ring-sky-500 dark:ring-transparent dark:focus-within:ring-sky-300;
				}
			}

			&.standard, &.flat {
				> .item-active, > .item-link {
					@apply hover:bg-gray-100 dark:hover:bg-gray-800;
				}

				> .item-active {
					@apply bg-gray-100 dark:bg-gray-800;
				}
			}

			&.flat {
				&:not(.vertical) {
					@apply space-x-2;
				}

				&.vertical {
					@apply space-y-2;
				}

				> .item-active {
					@apply bg-gray-100 dark:bg-gray-700;
				}

				> .item-link {
					@apply rounded-md;
				}
			}

			&.secondary {
				@apply border-b-2 dark:border-gray-600;

				> .item-link {
					@apply border-b-2 dark:border-gray-600;
					margin-bottom: -2px;

					&.item-active {
						@apply border-gray-700 dark:border-gray-300;
					}
				}
			}

			&.tabular {
				@apply border-b border-gray-300 dark:border-gray-600;

				> * {
					@apply -mb-px;
				}

				> .item-active {
					@apply bg-white border border-b-0 border-gray-300 rounded-t dark:bg-gray-700 dark:border-gray-600;
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
