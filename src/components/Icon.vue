<script setup>
	import { computed } from 'vue';

	const $props = defineProps({
		icon: String,
		iconPack: {
			type: String,
			default: 'mdi',
		},
	});
	const iconClasses = computed(() => {
		switch ($props.iconPack) {
			case 'mdi': {
				return [
					$props.iconPack,
					$props.iconPack + '-' + $props.icon,
				];
			}
		}
	});
</script>

<template>
	<i class="dexios icon" :class="iconClasses"></i>
</template>
