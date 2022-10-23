<script setup>
	import { ref } from 'vue';

	const value = ref('Item 1');
	const values = ['Item 1', 'Item 2', 'Item 3'];
</script>

<template>
	<article class="dropdown prose">
		<h1>Dropdown</h1>

		<h3>Standard</h3>
		<DexiosDropdown v-model="value">
			<span>{{value}}</span>
			<template #menu="{ close }">
				<DexiosItem @click="value = val; close()" v-for="val in values">{{val}}</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Selection</h3>
		<DexiosDropdown class="selection">
			<span>{{value}}</span>
			<template #menu="{ close }">
				<DexiosItem @click="value = val; close()" v-for="val in values">{{val}}</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Inner HTML</h3>
		<DexiosDropdown class="selection">
			<span class="flex-1">{{value}}</span>
			<DexiosLabel>
				<span>100</span>
			</DexiosLabel>
			<template #menu="{ close }">
				<DexiosItem @click="value = val; close()" v-for="val in values">{{val}}</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Button</h3>
		<DexiosDropdown class="button">
			<span>{{value}}</span>
			<template #menu="{ close }">
				<DexiosItem @click="value = val; close()" v-for="val in values">{{val}}</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Complex</h3>
		<DexiosDropdown class="button">
			<DexiosIcon icon="filter" />
			<span>Label</span>
			<template #menu="{ close }">
				<div class="p-2">
					<DexiosInput placeholder="Search ..." />
				</div>
				<DexiosMenu plain vertical>
					<DexiosItem header icon>
						<DexiosIcon icon="tag" />
						<span>Filter by tag</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>Important</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>Announcement</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>Discussion</span>
					</DexiosItem>
				</DexiosMenu>
				<DexiosMenu plain vertical>
					<DexiosItem header icon>
						<DexiosIcon icon="calendar" />
						<span>Filter by date</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>This Week</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>This Month</span>
					</DexiosItem>
					<DexiosItem icon @click="close()">
						<DexiosIcon icon="circle" />
						<span>This Year</span>
					</DexiosItem>
				</DexiosMenu>
			</template>
		</DexiosDropdown>
	</article>
</template>
