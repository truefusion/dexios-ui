<script>
	import { h, isVNode } from 'vue';
	import Base from './../lib/Base.js';
	import Label from './Label.vue';
	import pullChildren from './../lib/pullChildren.js';

	export default {
		extends: Base,
		setup(props, { slots }) {
			return () => {
				const children = slots.default ? slots.default() : [];

				return h('div', {
					class: 'dexios labels',
				}, pullChildren(children, (child) => {
					if (child  === Label) {
						return true;
					}
					return false;
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
