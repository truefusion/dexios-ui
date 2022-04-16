<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		setup(props, { slots }) {
			return () => h('div', {
				class: {
					vigil: true,
					header: true,
					...props,
				},
			}, slots.default?.());
		},
	}
</script>

<style lang="less">
	.vigil {
		&.header:not(.item) {
			@apply font-bold space-x-2 !text-opacity-100 dark:text-white;
		}
	}
</style>
