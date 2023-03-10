<script setup>
	import { reactive, ref, unref } from 'vue';
	import { computePosition, flip, shift } from '@floating-ui/dom';
	import DexiosMenu from './Menu.vue';

	const $emit = defineEmits(['update:modelValue']);

	const $el = ref(null);
	const $label = ref(null);
	const $menu = ref(null);
	const props = defineProps({
		noArrow: Boolean,
	});
	const classes = reactive({
		open: false,
		'placement-bottom': true,
		'placement-top': false,
	});
	const middleware = [
		flip(),
		shift(),
	];
	const pos = reactive({
		left: '0px',
		top: '0px',
	});

	function close() {
		hide();
	}
	function hide() {
		classes.open = false;
		unref($el)?.blur();
	}
	function show() {
		classes.open = true;
		var root = unref($el);
		var menu = unref($menu);

		if (root.hasOwnProperty('$el')) {
			root = root.$el;
		}
		if (menu.hasOwnProperty('$el')) {
			menu = menu.$el;
		}

		computePosition(root, menu, {
			middleware,
			placement: 'bottom-start',
			strategy: 'absolute',
		}).then(({x,y,placement,strategy}) => {
			classes['placement-bottom'] = placement.includes('bottom');
			classes['placement-top'] = placement.includes('top');
			pos.left = `${x}px`;
			pos.top = `${y}px`;
		}).catch((err) => {
			console.warn(err);
		});
	}
</script>

<template>
	<div class="dexios dropdown" :class="classes" ref="$el" tabindex="-1" @focusout="hide" @focusin="show">
		<div class="dropdown-label" ref="$label">
			<slot></slot>
			<DexiosIcon class="dropdown-icon" :icon="classes.open ? 'chevron-up' : 'chevron-down'" v-if="!props.noArrow" />
		</div>
		<DexiosMenu class="dropdown-menu" ref="$menu" :style="pos" vertical>
			<slot :close="close" name="menu"></slot>
		</DexiosMenu>
	</div>
</template>

<style lang="less">
	.dexios {
		&.dropdown {
			@apply flex-col inline-flex relative;

			.dropdown-label {
				@apply flex flex-1 items-center px-4 e('py-1.5') space-x-2 text-gray-800 transition-colors z-1 dark:text-white;
			}

			.dropdown-menu {
				@apply absolute ring-gray-300 z-10;
			}

			&:not(.open) {
				@apply cursor-pointer;

				&:hover {
					.icon, .dropdown-label {
						@apply text-opacity-100 dark:text-opacity-100;
					}
				}

				.icon, .dropdown-label {
					@apply text-gray-800 text-opacity-70 transition-colors dark:text-opacity-70 dark:text-white;
				}

				.dropdown-menu {
					@apply hidden;
				}
			}

			&.button {
				@apply overflow-visible;

				.dropdown-menu {
					@apply my-2;
				}
			}

			&.button, &.selection {
				@apply p-0;

				.dropdown-label {
					@apply rounded dark:bg-gray-700 dark:ring-gray-800;
				}
			}

			&.selection {
				@apply min-w-max rounded w-60 hover:shadow;

				.dropdown-label {
					@apply ring-1 ring-gray-300;
				}

				.dropdown-menu {
					@apply ring-1 ring-sky-500 -my-px overflow-y-auto w-60 dark:ring-sky-300 dark:divide-sky-300;
				}

				&.open {
					.dropdown-label{
						@apply ring-sky-500 dark:ring-sky-300;
					}

					&.placement-bottom {
						.dropdown-label {
							@apply rounded-b-none;
						}

						.dropdown-menu {
							@apply rounded-t-none;
						}
					}

					&.placement-top {
						.dropdown-label {
							@apply rounded-t-none;
						}

						.dropdown-menu {
							@apply rounded-b-none;
						}
					}
				}
			}
		}
	}
</style>
