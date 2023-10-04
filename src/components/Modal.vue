<script>
	import { computed, h, ref } from 'vue';

	export default {
		setup(props, { attrs, expose, slots }) {
			const $el = ref(null);
			const isOpen = computed(() => {
				return $el.value?.open;
			});
			const reject = ref(null);
			const resolve = ref(null);

			function close() {
				$el.value?.close();
			}
			function closeWithAnimation() {
				var { animation } = attrs;
				if (!animation) {
					animation = 'scale';
				}
				$el.value.classList.remove(animation + '-in');
				$el.value.classList.add(animation + '-out');
			}
			function confirm() {
				if (typeof resolve.value == 'function') {
					resolve.value();
				}
				closeWithAnimation();
			}
			function open() {
				var {animation} = attrs;
				$el.value.classList.remove(animation + '-out');
				$el.value.classList.add(animation + '-in');
				$el.value.showModal();

				return new Promise((res, rej) => {
					resolve.value = res;
				});
			}
			function show() {
				return open();
			}

			expose({
				close: closeWithAnimation,
				confirm,
				isOpen,
				open,
				show,
			});

			return () => h('dialog', {
				class: {
					dexios: true,
					modal: true,
				},
				ref: $el,
				onAnimationend(e) {
					var {animationName} = e;
					switch (animationName) {
						case 'FadeOutDialog':
						case 'ScaleOutDialog': {
							close();
							break;
						}
					}
				},
			}, slots.default?.({
				close: closeWithAnimation,
				confirm,
			}));
		},
	}
</script>

<style lang="less">
	@keyframes FadeInDialog {
		from {
			opacity: 0.5;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes FadeOutDialog {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes ScaleInDialog {
		from {
			opacity: 0.5;
			transform: translate(-50%, -50%) scale(1.05);
		}
		to {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
	}

	@keyframes ScaleOutDialog {
		from {
			opacity: 1;
			transform: translate(-50%, -50%) scale(1);
		}
		to {
			opacity: 0;
			transform: translate(-50%, -50%) scale(1.05);
		}
	}

	dialog:not([open]) {
		@apply hidden;
	}

	dialog + .backdrop, ._dialog_overlay {
		@apply fixed inset-0;
	}

	.dexios {
		&.modal {
			@apply border-0 divide-y fixed e('left-1/2') m-0 overflow-visible p-0 rounded shadow-lg e('top-1/2') transform e('-translate-x-1/2') e('-translate-y-1/2') dark:bg-gray-500 dark:divide-gray-600;
			--animation-duration: 0.75s;

			&.fade-out {
				animation: FadeOutDialog;
				animation-duration: 0.5s;
			}

			&.fade-in {
				animation: FadeInDialog;
				animation-duration: var(--animation-duration);
			}

			&.scale-out {
				animation: ScaleOutDialog;
				animation-duration: 0.5s;
			}

			&.scale-in {
				animation: ScaleInDialog;
				animation-duration: var(--animation-duration);
			}

			&::backdrop, + .backdrop {
				@apply backdrop-filter bg-gray-300 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60;
			}

			> .modal-actions {
				@apply bg-gray-100 flex items-center justify-end p-4 rounded-b space-x-4 dark:bg-gray-700;
			}

			> .modal-content {
				@apply p-8 space-y-8 dark:text-white;
			}

			> .modal-header {
				@apply m-0 px-8 py-6 rounded-t text-2xl;
			}
		}
	}
</style>
