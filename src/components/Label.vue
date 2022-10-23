<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		name: 'Label',
		setup(props, { emit, expose, slots }) {
			var children = slots.default ? slots.default() : [];
			const details = children.filter(({ props }) => {
				return props && props.class && props.class.includes('label-detail');
			});
			const label = children.filter((child) => {
				return !details.includes(child);
			});

			return () => h('div', {
				'class': 'dexios label',
			}, [
				h('div', {}, label),
				...details,
			]);
		}
	}
</script>

<style lang="less">
	.dexios {
		&.label {
			@apply auto-cols-auto cursor-default grid grid-flow-col overflow-hidden rounded text-sm dark:text-white;

			&:not(.plain):not(.secondary) {
				@apply bg-gray-100 dark:bg-gray-800;

				.label-detail {
					@apply bg-gray-200 dark:bg-gray-700;
				}
			}

			&.circular {
				@apply rounded-full;
			}

			&.secondary {
				@apply border border-gray-300 divide-x dark:border-gray-600;

				.label-detail {
					@apply border-gray-300 dark:border-gray-600;
				}
			}

			> * {
				@apply flex items-center justify-center px-2 py-1 space-x-2;
			}

			.label-close {
				@apply cursor-pointer;
			}
		}
	}
</style>
