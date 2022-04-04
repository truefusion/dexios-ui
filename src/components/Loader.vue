<script>
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		props: {
			run: Boolean,
		},
	}
</script>

<template>
	<VigilDimmer class="loader" :class="{ hidden: !$props.run, running: $props.run, }">
		<VigilSpinner>
			<slot></slot>
		</VigilSpinner>
	</VigilDimmer>
</template>

<style lang="less">
	.vigil {
		&.loader {
			animation-name: FadeOut;
			animation-duration: 1s;

			&.running {
				animation-name: none;
			}
		}
	}
</style>
