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
			placement: selection ? 'bottom' : 'bottom-start',
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
			<VigilIcon icon="chevron-down" v-if="!props.button && !props.noArrow" />
		</div>
		<VigilMenu ref="$menu" vertical>
			<slot :close="close" :isActive="isActive" :setValue="setValue" name="menu"></slot>
		</VigilMenu>
	</div>
</template>

<style lang="less">
	.vigil {
		&.dropdown {
			@apply cursor-pointer flex-col inline-flex relative transition-colors;

			.dropdown-label-wrapper {
				@apply flex items-center space-x-2;
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
				@apply text-opacity-70;

				.dropdown-label-wrapper > * {
					@apply text-opacity-70;
				}

				.menu {
					@apply invisible opacity-10 pointer-events-none;
				}

				&:hover {
					 @apply text-opacity-100;

					 .dropdown-label-wrapper > * {
	 					@apply text-opacity-100;
	 				}
				}
			}

			&.button, &.selection {
				@apply overflow-visible;

				.dropdown-label-wrapper {
					@apply rounded;
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
