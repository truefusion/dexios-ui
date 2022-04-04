<script>
	import { h, resolveComponent } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		props: {
			circular: Boolean,
			loading: Boolean,
			placeholder: Boolean,
			plain: Boolean,
			raised: Boolean,
			stacked: Boolean,
			stackedTall: Boolean,
		},
		setup(props, { slots }) {
			return () => {
				var children = [];
				var slot = slots.default?.() ?? [];

				if (props.loading) {
					children.push(h(resolveComponent('VigilLoader'), {
						run: true,
					}));
				}

				return h('div', {
					class: {
						vigil: true,
						segment: true,
						...props,
					},
				}, children.concat(slot));
			};
		},
	}
</script>

<style lang="less">
	.vigil {
		&.segment {
			@apply border p-4 relative rounded;

			&.circular {
				@apply flex items-center justify-center rounded-full;
			}

			&.placeholder {
				@apply bg-gray-50 flex flex-col items-stretch justify-center min-h-72 p-0;
			}

			&.raised {
				@apply shadow-md;
			}

			&[class*="stacked"] {
				&::after, &::before {
					@apply absolute bg-gray-100 border-t border-gray-300 left-0 w-full;
					bottom: -3px;
					content: '';
					height: 5px;
				}
			}

			&.stacked-tall {
				&::before {
					@apply bottom-0;
				}
			}

			&.plain {
				@apply bg-transparent border-0 shadow-none;

				&::after, &::before {
					content: unset;
				}
			}
		}
	}
</style>
