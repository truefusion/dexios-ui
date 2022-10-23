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
			<DexiosLabel class="secondary">
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel class="plain">
				<span>Label</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Icon</h3>
		<DexiosLabels>
			<DexiosLabel>
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel class="secondary">
				<span>Label</span>
			</DexiosLabel>
			<DexiosLabel class="secondary">
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
			<DexiosLabel class="secondary">
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel>
				<DexiosIcon icon="mail"></DexiosIcon>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel class="secondary">
				<DexiosIcon icon="mail"></DexiosIcon>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Circular</h3>
		<DexiosLabels>
			<DexiosLabel class="circular">
				<DexiosIcon icon="mail"></DexiosIcon>
			</DexiosLabel>
			<DexiosLabel class="circular secondary">
				<DexiosIcon icon="mail"></DexiosIcon>
			</DexiosLabel>
			<DexiosLabel class="circular">
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
			<DexiosLabel class="circular secondary">
				<DexiosIcon class="label-icon" icon="mail"></DexiosIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</DexiosLabel>
		</DexiosLabels>

		<h3>Closable</h3>
		<DexiosLabels>
			<DexiosLabel :class="{ plain: label.plain, secondary: label.secondary }" v-for="label in labels">
				<span>{{label.label}}</span>
				<DexiosIcon class="label-close" icon="close-thick" @click="doSomething(label)"></DexiosIcon>
			</DexiosLabel>
		</DexiosLabels>
	</article>
</template>
