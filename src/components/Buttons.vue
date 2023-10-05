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

				var parentProps = {
					class: 'dexios-btns',
				};
				var childProps = {
					class: 'border-0 flex-1 rounded-none',
				};

				if (typeof attrs.class == 'string') {
					if (attrs.class.includes('dexios-plain')) {
						childProps.class += ' dexios-plain';
					}
					if (attrs.class.includes('dexios-primary')) {
						childProps.class += ' dexios-primary';
						parentProps.class += ' dexios-btns-primary';
					}
					if (attrs.class.includes('dexios-secondary')) {
						childProps.class += ' dexios-secondary';
						parentProps.class += ' dexios-btns-secondary';
					}
				}

				return h('div', parentProps, children.map((child) => {
					return h(child, childProps);
				}));
			};
		},
	}
</script>