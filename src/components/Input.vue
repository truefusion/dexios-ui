<script setup>
	import { computed, ref, unref } from 'vue';
	import Base from './../lib/Base.js';

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
			error,
			iconLeft,
			iconRight,
			loading,
			plain,
			type,
		} = $props;
		return {
			disabled,
			error,
			'icon-left': Boolean(iconLeft),
			'icon-right': Boolean(iconRight),
			loading,
			plain,
			[type]: true,
		};
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

<template>
	<label class="vigil input" :class="classes">
		<slot name="prefix"></slot>
		<span class="input-wrapper">
			<VigilSpinner class="input-spinner left" v-if="$props.iconLeft && $props.loading"></VigilSpinner>
			<VigilIcon class="input-icon left" :icon="$props.iconLeft" v-else-if="$props.iconLeft"></VigilIcon>
			<input ref="$input" v-bind="inputProps" v-model="value">
			<VigilIcon class="cursor-pointer right" icon="backspace" @click="clear" v-if="$props.clearable && value"></VigilIcon>
			<VigilSpinner class="input-spinner right" v-if="$props.iconRight && $props.loading"></VigilSpinner>
			<VigilIcon class="input-icon right" :icon="$props.iconRight" v-else-if="$props.iconRight"></VigilIcon>
		</span>
		<slot></slot>
	</label>
</template>

<style lang="less">
	.vigil {
		&.input {
			@apply divide-gray-300 inline-flex items-center ring-gray-300 transition-shadow dark:text-white;

			&:not(.plain) {
				@apply divide-x ring-1 rounded dark:bg-gray-700 dark:divide-gray-800 dark:ring-gray-800;

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
				@apply bg-rose-50 divide-rose-200 ring-rose-200 dark:divide-rose-300 dark:ring-rose-300;

				input {
					@apply placeholder-rose-200 text-rose-500;
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
				@apply bg-gray-50 pointer-events-none ring-gray-200 select-none opacity-80 dark:opacity-50;

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
