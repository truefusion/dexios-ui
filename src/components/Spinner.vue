<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		setup(props, { slots }) {
			return () => {
				var children = slots.default?.() ?? [];
				var caption = children.length ? h('div', {
					class: 'spinner-caption',
				}, children) : [];

				return h('div', {
					class: {
						vigil: true,
						spinner: true,
						...props,
					},
				}, caption);
			};
		},
	}
</script>

<style lang="less">
	.vigil {
		&.spinner {
			@apply flex-col inline-flex items-center justify-center space-y-4;

			&::before {
				@apply border-3 border-gray-300 border-t-gray-600 h-10 max-h-full max-w-full rounded-full w-10;
				animation: spinner .6s infinite linear;
				content: '';
				// min-width: 0.75rem;
			}

			&[speed="fast"] {
				&::before {
					animation: spinner .3s infinite linear;
				}
			}

			&[speed="slow"] {
				&::before {
					animation: spinner .9s infinite linear;
				}
			}
		}
	}
</style>
