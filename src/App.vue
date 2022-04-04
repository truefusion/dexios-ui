<script setup>
	import { computed } from 'vue';
	import { RouterLink, RouterView, useRouter } from 'vue-router';

	const $router = useRouter();

	const menu = computed(() => $router.getRoutes().map((route) => {
		var { name: label, path: href } = route;
		return { href, label };
	}));
</script>

<template>
	<aside class="dark">
		<VigilMenu plain vertical>
			<VigilItem :key="item.href" :to="item.href" v-for="item in menu">{{item.label}}</VigilItem>
		</VigilMenu>
	</aside>
	<RouterView class="view" />
</template>

<style lang="less">
	#app {
		@apply fixed font-inter flex inset-0;

		article {
			@apply flex-1 max-w-full overflow-y-auto p-8 space-y-8;
		}

		aside {
			@apply bg-gray-800 w-52;
		}
	}
</style>
