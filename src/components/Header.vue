<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		setup(props, { slots }) {
			return () => h('div', {
				class: {
					dexios: true,
					header: true,
					...props,
				},
			}, slots.default?.());
		},
	}
</script>

<style lang="less">
	.dexios {
		&.header:not(.item) {
			@apply flex font-bold items-center space-x-2 !text-opacity-100 dark:text-white;
		}
	}
</style>
