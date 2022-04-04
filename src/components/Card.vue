<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		setup(props, { slots }) {
			return () => h('div', {
				class: {
					vigil: true,
					card: true,
					...props,
				},
			}, slots.default?.());
		},
	}
</script>

<style lang="less">
	.vigil {
		&.card {
			@apply bg-white border divide-y flex-col inline-flex min-h-0 max-w-full rounded shadow w-72;

			.card-content {
				@apply p-4;
			}

			.card-description {
				@apply mt-2;
			}

			.card-extra {
				@apply px-4 py-3;
			}

			.card-header:not(.vigil) {
				@apply font-bold text-xl;
			}

			.card-image {
				img {
					@apply block h-auto m-0 w-full;
				}
			}

			.card-meta {
				@apply space-x-1 text-base text-gray-400;
			}
		}
	}
</style>
