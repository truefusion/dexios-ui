<script setup>
	import { computed, ref, unref, useAttrs } from 'vue';

	const $attrs = useAttrs();
	const $emit = defineEmits(['update:modelValue']);
	const $props = defineProps({
		clearable: Boolean,
		disabled: Boolean,
		error: Boolean,
		iconLeft: String,
		iconRight: String,
		loading: Boolean,
		modelValue: null,
		name: String,
		placeholder: String,
		plain: Boolean,
		readonly: Boolean,
		step: {
			type: [Number,String],
			default: 1,
		},
		type: {
			type: String,
			default: 'text',
		},
		value: null,
	});
	const $input = ref(null);

	const classes = computed(() => {
		var {
			disabled,
			iconLeft,
			iconRight,
			type,
		} = $props;
		return {
			disabled,
			'icon-left': Boolean(iconLeft),
			'icon-right': Boolean(iconRight),
			[type]: true,
		};
	});
	const filteredAttrs = computed(() => {
		return Object.entries($attrs).reduce((ret, [key, val]) => {
			if (!String(key).startsWith('on')) {
				ret[key] = val;
			}
			return ret;
		}, {});
	});
	const inputEvents = computed(() => {
		return Object.entries($attrs).reduce((ret, [key, val]) => {
			if (String(key).startsWith('on')) {
				ret[key] = val;
			}
			return ret;
		}, {});
	});
	const inputProps = computed(() => {
		var {
			disabled,
			name,
			placeholder,
			readonly,
			type,
			value,
		} = $props;
		var ret = {
			disabled,
			name,
			placeholder,
			readonly,
			type,
			...unref(inputEvents),
		};
		switch (type) {
			case 'checkbox':
			case 'radio': {
				ret['value'] = value;
			}
		}
		return ret;
	});
	const value = computed({
		get() {
			return $props.modelValue;
		},
		set(v) {
			$emit('update:modelValue', v);
		},
	});

	function clear() {
		value.value = '';
	}
	function focus() {
		$input.value.focus();
	}

	defineExpose({
		clear,
		focus,
	});
</script>

<script>
	export default {
		inheritAttrs: false,
	}
</script>

<template>
	<label class="dexios input" :class="classes" v-bind="filteredAttrs">
		<slot name="prefix"></slot>
		<span class="input-wrapper">
			<DexiosSpinner class="input-spinner left" v-if="$props.iconLeft && $props.loading"></DexiosSpinner>
			<DexiosIcon class="input-icon left" :icon="$props.iconLeft" v-else-if="$props.iconLeft"></DexiosIcon>
			<input ref="$input" v-bind="inputProps" v-model="value">
			<DexiosIcon class="cursor-pointer right" icon="backspace" @click="clear" v-if="$props.clearable && value"></DexiosIcon>
			<DexiosSpinner class="input-spinner right" v-if="$props.iconRight && $props.loading"></DexiosSpinner>
			<DexiosIcon class="input-icon right" :icon="$props.iconRight" v-else-if="$props.iconRight"></DexiosIcon>
		</span>
		<slot></slot>
	</label>
</template>

<style lang="less">
	.dexios {
		&.input {
			@apply divide-gray-300 inline-flex items-center ring-gray-300 transition-shadow dark:text-white;

			&:not(.plain) {
				@apply bg-white divide-x ring-1 rounded dark:bg-gray-700 dark:divide-gray-800 dark:ring-gray-800;

				&:focus-within {
					@apply divide-sky-500 ring-sky-500 dark:divide-sky-300 dark:ring-sky-300;

					.input-icon {
						@apply text-opacity-100 text-sky-500 dark:text-sky-300;
					}
				}
			}

			input {
				@apply bg-transparent flex-1 outline-none px-3 py-1;
			}

			.input-prefix {
				@apply order-first;
			}

			.input-spinner {
				@apply h-4 w-4;
			}

			.input-wrapper {
				@apply flex items-center justify-center self-stretch;

				.input-icon, .input-spinner {
					@apply transition-colors;

					&.left {
						@apply ml-3;
					}

					&.right {
						@apply mx-3;
					}
				}

				.input-icon {
					@apply text-opacity-50;
				}
			}

			&.checkbox, &.radio {
				@apply cursor-pointer;

				input {
					@apply cursor-pointer m-3;
				}

				&.plain {
					input {
						@apply mr-0;
					}
				}
			}

			&.file {
				@apply cursor-pointer;

				input {
					@apply cursor-pointer p-1;
				}

				.input-icon {
					@apply mx-2;
				}
			}

			&.number, &.text {
				input {
					@apply appearance-none w-full;
				}

				.input-wrapper {
					@apply flex-1;
				}
			}

			&.error {
				@apply bg-rose-50 divide-rose-300 ring-rose-300 dark:divide-rose-300 dark:ring-rose-300;

				input {
					@apply placeholder-rose-300 text-rose-500;
				}

				.input-icon {
					@apply text-rose-300;
				}

				&:focus-within {
					@apply divide-rose-500 ring-rose-500 dark:divide-rose-500 dark:ring-rose-500;

					.input-icon {
						@apply text-rose-500 dark:text-rose-500;
					}
				}
			}

			&.disabled, &.loading {
				@apply bg-gray-50 pointer-events-none ring-gray-300 select-none opacity-80 dark:opacity-50;

				input {
					@apply placeholder-gray-300;
				}

				.input-icon {
					@apply text-opacity-20;
				}
			}

			&.loading {
				@apply ring-gray-300;
			}

			> .item {
				@apply px-3 e('py-1.5');
			}
		}
	}
</style>
