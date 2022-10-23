<template>
	<article class="message prose">
		<h1>Message</h1>

		<h3>Standard</h3>
		<DexiosMessage>
			<DexiosHeader>Header</DexiosHeader>
			<div>Message</div>
		</DexiosMessage>

		<h3>Raised</h3>
		<DexiosMessage raised>
			<DexiosHeader>Header</DexiosHeader>
			<div>Message</div>
		</DexiosMessage>

		<h3>Colors</h3>
		<section class="flex flex-col space-y-4">
			<DexiosMessage class="green">
				<DexiosHeader>Green</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="lime">
				<DexiosHeader>Lime</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="orange">
				<DexiosHeader>Orange</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="pink">
				<DexiosHeader>Pink</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="red">
				<DexiosHeader>Red</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="sky">
				<DexiosHeader>Sky</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
			<DexiosMessage class="yellow">
				<DexiosHeader>Yellow</DexiosHeader>
				<div>Message</div>
			</DexiosMessage>
		</section>
	</article>
</template>

<script>
	export default {
	}
</script>
