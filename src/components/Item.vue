<script>
	import { computed, h, unref } from 'vue';
	import { RouterLink, useLink } from 'vue-router';
	import Base from './../lib/Base.js';

	RouterLink.props.to.required = false;

	export default {
		extends: Base,
		props: {
			active: Boolean,
			header: Boolean,
			...RouterLink.props,
		},
		setup(props, { attrs, slots }) {
			return () => {
				var { active, to } = props;
				var { href, isActive, isExactActive: exact, navigate: onClick } = to ? useLink(props) : {};
				const link = computed(() => {
					var {href, onClick} = attrs;
					if (onClick || href || props.to) {
						return true;
					}
					return false;
				});
				const classes = computed(() => {
					var { active, ariaCurrentValue, to, ...other } = props;
					return {
						vigil: true,
						item: true,
						active: active || unref(isActive) || unref(exact),
						link: Boolean(unref(link)),
						...other,
					};
				});
				const tag = computed(() => {
					if (unref(link)) {
						return 'a';
					}
					return 'div';
				});

				href = unref(href);

				return h(unref(tag), {
					class: unref(classes),
					href,
					onClick,
				}, slots.default?.());
			};
		},
	}
</script>

<style lang="less">
	.vigil {
		&.item {
			@apply transition-colors dark:text-white;

			&.header {
				@apply font-bold;
			}

			&.link {
				@apply cursor-pointer no-underline text-opacity-70;

				> * {
					@apply text-opacity-70;
				}

				&:hover, &.active {
					@apply text-opacity-100;

					> * {
						@apply text-opacity-100;
					}
				}

				&.active {
					@apply pointer-events-none;
				}
			}
		}
	}
</style>
