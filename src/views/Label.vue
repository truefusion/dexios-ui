<script setup>
	const labels = [
		{
			label: 'Label 1',
		},
		{
			label: 'Label 2',
			secondary: true,
		},
		{
			label: 'Label 3',
			plain: true,
		},
	];

	function doSomething(label) {
		console.log(label);
	}
</script>

<template>
	<article class="label prose">
		<h1>Label</h1>
		<DexiosLabels>
			<DexiosLabel>
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel secondary>
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel plain>
				<span>Label</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Icon</h3>
		<DexiosLabels>
			<DexiosLabel>
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel secondary>
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel plain>
				<span>Label</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Detail</h3>
		<DexiosLabels>
			<DexiosLabel>
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel secondary>
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel>
				<DexiosIcon icon="mail"></DexiosIcon>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel secondary>
				<DexiosIcon icon="mail"></DexiosIcon>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Circular</h3>
		<DexiosLabels>
			<DexiosLabel circular>
				<DexiosIcon icon="mail"></DexiosIcon>
			</DexiosLabel>
			<DexiosLabel circular secondary>
				<DexiosIcon icon="mail"></DexiosIcon>
			</DexiosLabel>
			<DexiosLabel circular>
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel circular secondary>
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Closable</h3>
		<DexiosLabels>
			<DexiosLabel :plain="label.plain" :secondary="label.secondary" @close="doSomething(label)" v-for="label in labels">
				<template v-slot="{close}">
					<span>{{label.label}}</span>
					<DexiosIcon class="label-close" icon="close-thick" @click="close"></DexiosIcon>
				</template>
			</DexiosLabel>
		</DexiosLabels>
	</article>
</template>
