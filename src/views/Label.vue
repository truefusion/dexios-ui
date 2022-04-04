<script setup>
	const labels = [
		{
			label: 'Label 1',
		},
		{
			label: 'Label 2',
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
		<VigilLabels>
			<VigilLabel>
				<span>Label</span>
			</VigilLabel>
			<VigilLabel plain>
				<span>Label</span>
			</VigilLabel>
		</VigilLabels>

		<h3>Icon</h3>
		<VigilLabels>
			<VigilLabel>
				<span>Label</span>
			</VigilLabel>
			<VigilLabel plain>
				<span>Label</span>
			</VigilLabel>
		</VigilLabels>

		<h3>Detail</h3>
		<VigilLabels>
			<VigilLabel>
				<VigilIcon class="label-icon" icon="mail"></VigilIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</VigilLabel>
			<VigilLabel plain>
				<VigilIcon class="label-icon" icon="mail"></VigilIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</VigilLabel>
			<VigilLabel plain>
				<VigilIcon icon="mail"></VigilIcon>
				<span class="label-detail">Detail</span>
			</VigilLabel>
		</VigilLabels>

		<h3>Circular</h3>
		<VigilLabels>
			<VigilLabel circular>
				<VigilIcon icon="mail"></VigilIcon>
			</VigilLabel>
			<VigilLabel circular plain>
				<VigilIcon icon="mail"></VigilIcon>
			</VigilLabel>
			<VigilLabel circular>
				<VigilIcon class="label-icon" icon="mail"></VigilIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</VigilLabel>
			<VigilLabel circular plain>
				<VigilIcon class="label-icon" icon="mail"></VigilIcon>
				<span>Label</span>
				<span class="label-detail">Detail</span>
			</VigilLabel>
		</VigilLabels>

		<h3>Closable</h3>
		<VigilLabels>
			<VigilLabel :plain="label.plain" @close="doSomething(label)" v-for="label in labels">
				<template v-slot="{close}">
					<span>{{label.label}}</span>
					<VigilIcon class="label-close" icon="close-thick" @click="close"></VigilIcon>
				</template>
			</VigilLabel>
		</VigilLabels>
	</article>
</template>
