<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';
	import pullChildren from './../lib/pullChildren.js';

	export default {
		extends: Base,
		props: {
			plain: Boolean,
			vertical: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = slots.default?.() ?? [];
				children = pullChildren(children, function (type) {
					if (type?.name == 'Segment') {
						return true;
					}
					return false;
				});

				var childProps = {
					plain: true,
				};

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
		&.segments {
			&:not(.plain) {
				@apply border border-gray-300 flex rounded dark:border-gray-700;

				&:not(.vertical) {
					@apply divide-x;
				}

				&.vertical {
					@apply divide-y;
				}
			}

			&.vertical {
				@apply flex-col;
			}
		}
	}
</style>
