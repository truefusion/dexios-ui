<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';
	import pullChildren from './../lib/pullChildren.js';

	export default {
		extends: Base,
		props: {
			compact: Boolean,
			plain: Boolean,
			primary: Boolean,
			secondary: Boolean,
			vertical: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = slots.default?.() ?? [];
				children = pullChildren(children, function (type) {
					if (type?.name == 'Button') {
						return true;
					}
					return false;
				});

				var childProps = {...props};
				delete childProps['vertical'];

				return h('div', {
					class: {
						dexios: true,
						buttons: true,
						...props,
					},
				}, children.map((child) => {
					return h(child, {
						...childProps,
					});
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
				@apply border-0 flex-1 rounded-none;
			}
		}
	}
</style>
