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
					if (attrs.class.includes('dexios-btns-plain')) {
						childProps.class += ' dexios-btn-plain';
					}
					if (attrs.class.includes('dexios-btns-primary')) {
						childProps.class += ' dexios-btn-primary';
					}
					if (attrs.class.includes('dexios-btns-secondary')) {
						childProps.class += ' dexios-btn-secondary';
					}
				}

				return h('div', {
					class: 'dexios-btns',
				}, children.map((child) => {
					return h(child, childProps);
				}));
			};
		},
	}
</script>