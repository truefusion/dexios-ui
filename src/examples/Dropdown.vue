<script setup>
	import { ref } from 'vue';

	const value = ref(1);
</script>

<template>
	<article class="dropdown prose">
		<h1>Dropdown</h1>

		<h3>Standard</h3>
		<DexiosDropdown v-model="value">
			<span>{{value}}</span>
			<template #menu="{ close, isActive, setValue }">
				<DexiosItem @click="setValue(1)">Item</DexiosItem>
				<DexiosItem @click="setValue(2)">Item</DexiosItem>
				<DexiosItem @click="setValue(3)">Item</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Selection</h3>
		<DexiosDropdown class="selection">
			<span>Label</span>
			<template #menu="{ close, isActive, setValue }">
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Inner HTML</h3>
		<DexiosDropdown class="selection">
			<span class="flex-1">Label</span>
			<DexiosLabel>
				<span>100</span>
			</DexiosLabel>
			<template #menu="{ close, isActive, setValue }">
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Button</h3>
		<DexiosDropdown class="button">
			<span>Label</span>
			<template #menu="{ close, isActive, setValue }">
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
				<DexiosItem>Item</DexiosItem>
			</template>
		</DexiosDropdown>

		<h3>Complex</h3>
		<DexiosDropdown class="button">
			<DexiosIcon icon="filter" />
			<span>Label</span>
			<template #menu="{setValue}">
				<div class="p-2">
					<DexiosInput placeholder="Search ..." />
				</div>
				<DexiosMenu plain vertical>
					<DexiosItem header icon>
						<DexiosIcon icon="tag" />
						<span>Filter by tag</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('important')">
						<DexiosIcon icon="circle" />
						<span>Important</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('announcement')">
						<DexiosIcon icon="circle" />
						<span>Announcement</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('discussion')">
						<DexiosIcon icon="circle" />
						<span>Discussion</span>
					</DexiosItem>
				</DexiosMenu>
				<DexiosMenu plain vertical>
					<DexiosItem header icon>
						<DexiosIcon icon="calendar" />
						<span>Filter by date</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('week')">
						<DexiosIcon icon="circle" />
						<span>This Week</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('month')">
						<DexiosIcon icon="circle" />
						<span>This Month</span>
					</DexiosItem>
					<DexiosItem icon @click="setValue('year')">
						<DexiosIcon icon="circle" />
						<span>This Year</span>
					</DexiosItem>
				</DexiosMenu>
			</template>
		</DexiosDropdown>
	</article>
</template>
