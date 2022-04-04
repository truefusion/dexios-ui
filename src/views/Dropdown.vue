<script setup>
	import { ref } from 'vue';

	const value = ref(1);
</script>

<template>
	<article class="dropdown prose">
		<h1>Dropdown</h1>

		<h3>Standard</h3>
		<VigilDropdown v-model="value">
			<span>{{value}}</span>
			<template #menu="{ close, isActive, setValue }">
				<VigilItem @click="setValue(1)">Item</VigilItem>
				<VigilItem @click="setValue(2)">Item</VigilItem>
				<VigilItem @click="setValue(3)">Item</VigilItem>
			</template>
		</VigilDropdown>

		<h3>Selection</h3>
		<VigilDropdown selection>
			<span>Label</span>
			<template #menu="{ close, isActive, setValue }">
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
			</template>
		</VigilDropdown>

		<h3>Inner HTML</h3>
		<VigilDropdown selection>
			<span class="flex-1">Label</span>
			<VigilLabel>
				<span>100</span>
			</VigilLabel>
			<template #menu="{ close, isActive, setValue }">
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
			</template>
		</VigilDropdown>

		<h3>Button</h3>
		<VigilDropdown button>
			<span>Label</span>
			<template #menu="{ close, isActive, setValue }">
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
				<VigilItem>Item</VigilItem>
			</template>
		</VigilDropdown>

		<h3>Complex</h3>
		<VigilDropdown button>
			<VigilIcon icon="filter" />
			<span>Label</span>
			<template #menu="{setValue}">
				<div class="p-2">
					<VigilInput placeholder="Search ..." />
				</div>
				<VigilMenu plain vertical>
					<VigilItem header icon>
						<VigilIcon icon="tag" />
						<span>Filter by tag</span>
					</VigilItem>
					<VigilItem icon @click="setValue('important')">
						<VigilIcon icon="circle" />
						<span>Important</span>
					</VigilItem>
					<VigilItem icon @click="setValue('announcement')">
						<VigilIcon icon="circle" />
						<span>Announcement</span>
					</VigilItem>
					<VigilItem icon @click="setValue('discussion')">
						<VigilIcon icon="circle" />
						<span>Discussion</span>
					</VigilItem>
				</VigilMenu>
				<VigilMenu plain vertical>
					<VigilItem header icon>
						<VigilIcon icon="calendar" />
						<span>Filter by date</span>
					</VigilItem>
					<VigilItem icon @click="setValue('week')">
						<VigilIcon icon="circle" />
						<span>This Week</span>
					</VigilItem>
					<VigilItem icon @click="setValue('month')">
						<VigilIcon icon="circle" />
						<span>This Month</span>
					</VigilItem>
					<VigilItem icon @click="setValue('year')">
						<VigilIcon icon="circle" />
						<span>This Year</span>
					</VigilItem>
				</VigilMenu>
			</template>
		</VigilDropdown>
	</article>
</template>
