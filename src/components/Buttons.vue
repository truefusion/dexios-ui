<script>
	import { h } from 'vue';
	import pullChildren from './../lib/pullChildren.js';
	import Button from './Button.vue';

	export default {
		setup(props, { attrs, slots }) {
			return () => {
				var children = typeof slots.default == 'function' ? slots.default() : [];
				children = pullChildren(children, function (child) {
					return child === Button;
				});

				var cls = [];
				if (typeof attrs.class == 'string') {
					cls = attrs.class.split(' ');
					cls = cls.filter((item) => {
						return !['vertical'].includes(item);
					});
				}
				var childProps = {
					'class': cls,
				};

				return h('div', {
					class: 'dexios buttons',
				}, children.map((child) => {
					return h(child, childProps);
				}));
			};
		},
	}
</script>

<style lang="less">
	.dexios {
		&.buttons {
			@apply border border-gray-300 inline-flex overflow-hidden rounded dark:border-gray-700;

			&:not(.vertical) {
				@apply divide-x;
			}

			&.vertical {
				@apply divide-y flex-col;
			}

			&.plain, &.primary, &.secondary {
				@apply border-0;
			}

			&.plain {
				@apply divide-x-0 divide-y-0;
			}

			.button {
				@apply border-0 rounded-none;
			}
		}
	}
</style>
