<script setup>
	import { computed, ref } from 'vue';
	import { RouterLink, RouterView, useRouter } from 'vue-router';

	const $router = useRouter();
	const dark = ref(false);

	const menu = computed(() => $router.getRoutes().map((route) => {
		var { name: label, path: href } = route;
		return { href, label };
	}));
</script>

<template>
	<aside :class="{ dark }">
		<DexiosMenu secondary>
			<DexiosItem header>Dexios</DexiosItem>
			<DexiosItem :key="item.href" :to="item.href" v-for="item in menu">{{item.label}}</DexiosItem>
			<DexiosItem spacer></DexiosItem>
			<DexiosInput plain type="checkbox" v-model="dark">
				<DexiosItem class="flex-1">Dark Mode</DexiosItem>
			</DexiosInput>
		</DexiosMenu>
	</aside>
	<RouterView class="view" :class="{ dark }" />
</template>

<style lang="less">
	#app {
		@apply fixed font-inter flex flex-col inset-0;

		article, aside {
			&.dark {
				@apply bg-black;
			}
		}

		article {
			@apply flex-1 max-w-full overflow-y-auto p-16 space-y-8;
		}
	}
</style>
