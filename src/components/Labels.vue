<script>
	import { h, isVNode } from 'vue';
	import Label from './Label.vue';
	import pullChildren from './../lib/pullChildren.js';

	export default {
		setup(props, { slots }) {
			return () => {
				var children = typeof slots.default == 'function' ? slots.default() : [];

				return h('div', {
					class: 'dexios labels',
				}, pullChildren(children, (child) => {
					return child  === Label;
				}));
			};
		},
	}
</script>

<style lang="less">
	.dexios {
		&.labels {
			@apply flex items-center space-x-2;
		}
	}
</style>
