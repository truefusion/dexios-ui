<script setup>
	import { computed, ref } from 'vue';

	const day = ref(new Date());
</script>

<template>
	<article class="calendar prose">
		<h1>Calendar</h1>
		<DexiosCalendar class="w-112" v-model="day">
		</DexiosCalendar>
	</article>
</template>
