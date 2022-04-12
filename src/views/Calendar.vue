<script setup>
	import { computed, ref } from 'vue';

	const day = ref(new Date());
</script>

<template>
	<article class="calendar prose">
		<h1>Calendar</h1>
		<VigilCalendar class="w-112" v-model="day">
		</VigilCalendar>
	</article>
</template>
