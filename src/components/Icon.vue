<script>
	import { h } from 'vue';
	import Base from './../lib/Base.js';

	export default {
		extends: Base,
		props: {
			icon: String,
		},
		setup(props) {
			return () => h('i', {
				class: {
					vigil: true,
					icon: true,
					dark: props.dark,
					mdi: true,
					[`mdi-${props.icon}`]: Boolean(props.icon),
				},
			});
		},
	}
</script>

<style lang="less">
	.vigil {
		&.icon {
			@apply dark:text-white;
		}
	}
</style>
