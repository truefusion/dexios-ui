<script>
	import { h } from 'vue';
	import Segment from "./Segment.vue";
	import pullChildren from './../lib/pullChildren.js';

	export default {
		props: {
			plain: Boolean,
			vertical: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = typeof slots.default == 'function' ? slots.default() : [];
				children = pullChildren(children, function (child) {
					return child === Segment;
				});

				var childProps = {
					plain: true,
				};

				return h('div', {
					class: {
						dexios: true,
						segments: true,
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
