<script>
	import { h } from 'vue';
	import pullChildren from './../lib/pullChildren.js';
	import Button from './Button.vue';

	export default {
		setup(props, { attrs, slots }) {
			return () => {
				var children = typeof slots.default == 'function' ? slots.default() : [];
				children = pullChildren(children, function (child) {
					return child === Button;
				});

				var childProps = {
					class: 'border-0 flex-1 rounded-none',
				};

				if (typeof attrs.class == 'string') {
					if (attrs.class.includes('dex-ui-btns-plain')) {
						childProps.class += ' dex-ui-btn-plain';
					}
					if (attrs.class.includes('dex-ui-btns-primary')) {
						childProps.class += ' dex-ui-btn-primary';
					}
					if (attrs.class.includes('dex-ui-btns-secondary')) {
						childProps.class += ' dex-ui-btn-secondary';
					}
				}

				return h('div', {
					class: 'dex-ui-btns',
				}, children.map((child) => {
					return h(child, childProps);
				}));
			};
		},
	}
</script>