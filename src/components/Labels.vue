<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';
	import pullChildren from './../lib/pullChildren.js';

	export default {
		extends: Base,
		props: {
			circular: Boolean,
			plain: Boolean,
			secondary: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = slots.default?.() ?? [];
				children = pullChildren(children, function (type) {
					if (type?.name == 'Label') {
						return true;
					}
					return false;
				});

				var childProps = {...props};

				return h('div', {
					class: {
						dexios: true,
						labels: true,
						...props,
					},
				}, children.map((child) => {
					var {props} = child;
					return h(child, {
						...childProps,
						...props,
					});
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
