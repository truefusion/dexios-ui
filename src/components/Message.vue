<script>
	import { h } from 'vue';
	import Segment from './Segment.vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		props: {
			raised: Boolean,
		},
		setup(props, { slots }) {
			return () => h(Segment, {
				class: {
					vigil: true,
					message: true,
					...props,
				},
			}, slots.default);
		},
	}
</script>

<style lang="less">
	.vigil {
		&.message {
			@apply bg-sky-50 border-blue-300 space-y-2 dark:bg-sky-900 dark:border-blue-400 dark:text-blue-100;

			* {
				@apply text-blue-900 dark:text-blue-100;
			}

			&.green {
				@apply bg-green-50 border-green-400 text-green-900 dark:bg-green-900 dark:border-green-500;

				* {
					@apply text-green-900 dark:text-green-100;
				}
			}

			&.lime {
				@apply bg-lime-50 border-lime-400 text-lime-900;

				* {
					@apply text-lime-900;
				}
			}

			&.orange {
				@apply bg-orange-50 border-orange-300 text-orange-900;

				* {
					@apply text-orange-900;
				}
			}

			&.pink {
				@apply bg-pink-50 border-pink-300 text-pink-900;

				* {
					@apply text-pink-900;
				}
			}

			&.red {
				@apply bg-rose-50 border-rose-300 text-rose-900;

				* {
					@apply text-red-900;
				}
			}

			&.sky {
				@apply bg-sky-50 border-sky-300 text-sky-900;

				* {
					@apply text-sky-900;
				}
			}

			&.yellow {
				@apply bg-yellow-50 border-yellow-300 text-yellow-900;

				* {
					@apply text-yellow-900;
				}
			}
		}
	}
</style>
