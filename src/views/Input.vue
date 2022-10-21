<script setup>
	import { ref } from 'vue';

	const num = ref(1);
	const b   = ref(false);
	const chk = ref(['1']);
	const rad = ref('1');
	const val = ref('');

	function onEnter() {
		console.log('enter key pressed');
	}
</script>

<template>
	<article class="input prose">
		<h1>Input</h1>
		<DexiosInput placeholder="Search" @keydown.enter="onEnter"></DexiosInput>

		<h3>Number</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput type="number" v-model.number="num"></DexiosInput>
			<span>{{num}}</span>
		</div>

		<h3>Checkbox</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput type="checkbox" value="1" v-model="chk">
				<DexiosItem>1</DexiosItem>
			</DexiosInput>
			<DexiosInput type="checkbox" value="2" v-model="chk">
				<DexiosItem>2</DexiosItem>
			</DexiosInput>
			<span>{{chk}}</span>
		</div>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput type="checkbox" v-model="b">
				<DexiosItem>Boolean</DexiosItem>
			</DexiosInput>
			<span>{{b}}</span>
		</div>

		<h3>Radio</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput type="radio" value="1" v-model="rad">
				<DexiosItem>1</DexiosItem>
			</DexiosInput>
			<DexiosInput type="radio" value="2" v-model="rad">
				<DexiosItem>2</DexiosItem>
			</DexiosInput>
			<span>{{rad}}</span>
		</div>

		<h3>File</h3>
		<DexiosInput type="file"></DexiosInput>

		<h3>Icon</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput class="w-60" icon-left="magnify" placeholder="Search"></DexiosInput>
			<DexiosInput class="w-60" icon-right="magnify" placeholder="Search"></DexiosInput>
			<DexiosInput icon-right="magnify" type="checkbox"></DexiosInput>
			<DexiosInput icon-right="magnify" type="radio"></DexiosInput>
			<DexiosInput icon-left="magnify" type="file"></DexiosInput>
		</div>

		<h3>Clearable</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput class="w-60" clearable placeholder="Search" v-model="val"></DexiosInput>
			<DexiosInput class="w-60" clearable icon-right="magnify" placeholder="Search" v-model="val"></DexiosInput>
		</div>

		<h3>Disabled</h3>
		<DexiosInput class="w-60" disabled icon-right="magnify" placeholder="Search"></DexiosInput>

		<h3>Error</h3>
		<DexiosInput class="w-60" error icon-right="magnify" placeholder="Search"></DexiosInput>

		<h3>Loading</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput class="w-60" icon-left="magnify" loading placeholder="Search"></DexiosInput>
			<DexiosInput class="w-60" icon-right="magnify" loading placeholder="Search"></DexiosInput>
		</div>

		<h3>Prefix and Suffix</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput icon-left="magnify" placeholder="Search">
				<template #prefix>
					<DexiosItem>Prefix</DexiosItem>
				</template>
				<DexiosItem>Suffix</DexiosItem>
			</DexiosInput>
		</div>

		<h3>Plain</h3>
		<div class="flex flex-col items-start space-y-2">
			<DexiosInput class="w-60" icon-left="magnify" plain placeholder="Search">
				<DexiosItem class="input-prefix">Prefix</DexiosItem>
				<DexiosItem>Suffix</DexiosItem>
			</DexiosInput>
			<DexiosInput plain type="radio" value="1" v-model="rad">
				<DexiosItem>1</DexiosItem>
			</DexiosInput>
			<DexiosInput plain type="checkbox" v-model="b">
				<DexiosItem>Boolean</DexiosItem>
			</DexiosInput>
		</div>
	</article>
</template>
