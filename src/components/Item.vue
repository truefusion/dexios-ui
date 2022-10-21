<script setup>
	import { computed, h, unref, useAttrs } from 'vue';

	const $attrs = useAttrs();
	const $props = defineProps({
		active: Boolean,
		header: Boolean,
		icon: Boolean,
		spacer: Boolean,
	});
	const classes = computed(() => ({
		active: $props.active,
		'item-header': $props.header,
		'item-link': $attrs.href,
		'item-icon': $props.icon,
		'item-spacer': $props.spacer,
	}));
</script>

<template>
	<a class="dexios item" :class="classes">
		<slot></slot>
	</a>
</template>

<style lang="less">
	.dexios {
		&.item {
			@apply no-underline transition-colors dark:text-white;

			&.item-header {
				@apply font-bold;
			}

			&.item-icon {
				@apply flex space-x-2;
			}

			&.item-link {
				@apply cursor-pointer no-underline text-opacity-70;

				> * {
					@apply text-opacity-70;
				}

				&:hover, &.active {
					@apply text-opacity-100;

					> * {
						@apply text-opacity-100;
					}
				}

				&.item-active {
					@apply pointer-events-none;
				}
			}
		}
	}
</style>
