<script setup>
	import { computed } from 'vue';
	import Base from './../lib/Base.js';

	const $props = defineProps({
		...Base.props,
		circular: Boolean,
		loading: Boolean,
		placeholder: Boolean,
		plain: Boolean,
		raised: Boolean,
		stacked: Boolean,
		stackedTall: Boolean,
	});

	const classes = computed(() => {
		var ret = {
			dexios: true,
			segment: true,
			...$props,
		};
		ret['stacked-tall'] = ret.stackedTall;
		delete ret['stackedTall'];
		return ret;
	});
</script>

<script>
	export default {
		name: 'Segment',
	}
</script>

<template>
	<div class="dexios segment" :class="classes">
		<DexiosLoader run v-if="$props.loading"></DexiosLoader>
		<slot></slot>
	</div>
</template>

<style lang="less">
	.dexios {
		&.segment {
			@apply border p-4 relative rounded dark:bg-gray-700 dark:border-gray-800 dark:text-white;

			&.circular {
				@apply flex items-center justify-center rounded-full;
			}

			&.placeholder {
				@apply bg-gray-50 flex flex-col items-stretch justify-center min-h-72 p-0 dark:bg-gray-800;
			}

			&.raised {
				@apply shadow-md;
			}

			&[class*="stacked"] {
				&::after, &::before {
					@apply absolute bg-gray-100 border-t border-gray-300 left-0 w-full dark:bg-gray-800 dark:border-gray-700;
					bottom: -3px;
					content: '';
					height: 5px;
				}
			}

			&.stacked-tall {
				&::before {
					@apply bottom-0;
				}
			}

			&.plain {
				@apply bg-transparent border-0 shadow-none;

				&::after, &::before {
					content: unset;
				}
			}
		}
	}
</style>
