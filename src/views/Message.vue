<template>
	<article class="message prose">
		<h1>Message</h1>

		<h3>Standard</h3>
		<VigilMessage>
			<VigilHeader>Header</VigilHeader>
			<div>Message</div>
		</VigilMessage>

		<h3>Colors</h3>
		<section class="flex flex-col space-y-4">
			<VigilMessage class="green">
				<VigilHeader>Green</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="lime">
				<VigilHeader>Lime</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="orange">
				<VigilHeader>Orange</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="pink">
				<VigilHeader>Pink</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="red">
				<VigilHeader>Red</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="sky">
				<VigilHeader>Sky</VigilHeader>
				<div>Message</div>
			</VigilMessage>
			<VigilMessage class="yellow">
				<VigilHeader>Yellow</VigilHeader>
				<div>Message</div>
			</VigilMessage>
		</section>
	</article>
</template>

<script>
	export default {
	}
</script>
