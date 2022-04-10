<script setup>
	import { computed, onBeforeUnmount, onMounted, ref, unref, watch } from 'vue';
	import Base from './../lib/Base.js';
	import { createPopper } from '@popperjs/core';
	import flip from '@popperjs/core/lib/modifiers/flip.js';

	import VigilMenu from './Menu.vue';

	const $emit = defineEmits(['update:modelValue']);

	const $el = ref(null);
	const $menu = ref(null);
	const open = ref(false);
	const popper = ref(null);

	const props = defineProps({
		...Base.props,
		button: Boolean,
		clearable: Boolean,
		modelValue: null,
		noArrow: Boolean,
		placement: {
			type: String,
			default: 'bottom-start',
		},
		selection: Boolean,
		strategy: {
			type: String,
			default: 'absolute',
		},
	});

	const modifiers = computed(() => {
		var offset = {
			name: 'offset',
			enabled: true,
			options: {
				offset: props.selection ? [0,-1] : [0,5],
			},
		};

		var events = {
			name: 'eventListeners',
			enabled: false,
		};

		return [
			events,
			flip,
			offset,
		];
	});
	const options = computed(() => {
		var {
			selection,
			strategy,
		} = props;
		return {
			modifiers: unref(modifiers),
			placement: selection ? 'bottom' : props.placement,
			strategy,
		};
	});
	const value = computed({
		get() {
			return props.modelValue;
		},
		set(value) {
			$emit('update:modelValue', value);
		},
	});

	const classes = computed(() => {
		var {
			button,
			selection,
		} = props;

		var {state} = unref(popper) || {};
		var {placement} = state || {};

		return {
			button,
			open: unref(open),
			'placement-bottom': placement?.includes('bottom'),
			'placement-top': placement?.includes('top'),
			selection,
		};
	});

	function close() {
		hide(true);
	}
	function hide(force) {
		if ((typeof force == 'boolean' && force) || !unref($el).matches(':focus-within')) {
			open.value = false;
			unref($el)?.blur();

			popper.value?.setOptions((options) => ({
				...options,
				modifiers: [
					...options.modifiers,
					{ name: 'eventListeners', enabled: true },
				],
			}));
			popper.value?.update();
		}
	}
	function isActive(v) {
		return v === unref(value);
	}
	function setValue(v, autoclose = true) {
		value.value = v;
		autoclose && close();
	}
	function show() {
		open.value = true;
		popper.value?.setOptions((options) => ({
			...options,
			modifiers: [
				...options.modifiers,
				{ name: 'eventListeners', enabled: false },
			],
		}));
	}

	onMounted(() => {
		popper.value = createPopper(unref($el), unref($menu).$el, unref(options));
	});
	onBeforeUnmount(() => {
		popper.value?.destroy();
	});
</script>

<template>
	<div class="vigil dropdown" :class="classes" ref="$el" tabindex="-1" @focusout="hide" @focusin="show">
		<div class="dropdown-label-wrapper">
			<slot></slot>
			<!-- <VigilIcon icon="backspace" v-if="clearable && ActiveItem" ref="clear" /> -->
			<VigilIcon class="dropdown-icon" :icon="open ? 'chevron-up' : 'chevron-down'" v-if="!props.button && !props.noArrow" />
		</div>
		<VigilMenu ref="$menu" vertical>
			<slot :close="close" :isActive="isActive" :setValue="setValue" name="menu"></slot>
		</VigilMenu>
	</div>
</template>

<style lang="less">
	.vigil {
		&.dropdown {
			@apply flex-col inline-flex relative;

			.dropdown-label-wrapper {
				@apply flex items-center space-x-2 text-gray-800 transition-colors dark:text-white;
			}

			.menu {
				@apply border-gray-300 transition-opacity visible z-1;
			}

			&:not(.button) {
				.dropdown-label-wrapper {
					@apply px-4 e('py-1.5');
				}
			}

			&:not(.open) {
				@apply cursor-pointer;

				&:hover {
					.icon, .dropdown-label-wrapper {
						@apply text-opacity-100 dark:text-opacity-100;
					}
				}

				.icon, .dropdown-label-wrapper {
					@apply text-gray-800 text-opacity-70 transition-colors dark:text-opacity-70 dark:text-white;
				}

				.menu {
					@apply invisible opacity-10 pointer-events-none;
				}
			}

			&.button, &.selection {
				@apply overflow-visible dark:bg-gray-800;

				.dropdown-label-wrapper {
					@apply rounded dark:border-gray-600;
				}
			}

			&.selection {
				@apply min-w-max hover:shadow;

				.dropdown-label-wrapper {
					@apply border border-gray-300;
				}

				.menu {
					@apply border-sky-500 overflow-y-auto w-full;
				}

				&.open {
					&.placement-bottom {
						.dropdown-label-wrapper {
							@apply rounded-b-none;
						}

						.menu {
							@apply rounded-t-none;
						}
					}

					&.placement-top {
						.dropdown-label-wrapper {
							@apply rounded-t-none;
						}

						.menu {
							@apply rounded-b-none;
						}
					}

					.dropdown-label-wrapper {
						@apply border-sky-500;
					}
				}
			}
		}
	}
</style>
