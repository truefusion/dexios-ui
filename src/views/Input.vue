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
		<VigilInput placeholder="Search" @keydown.enter="onEnter"></VigilInput>

		<h3>Number</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput type="number" v-model.number="num"></VigilInput>
			<span>{{num}}</span>
		</div>

		<h3>Checkbox</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput type="checkbox" value="1" v-model="chk">
				<VigilItem>1</VigilItem>
			</VigilInput>
			<VigilInput type="checkbox" value="2" v-model="chk">
				<VigilItem>2</VigilItem>
			</VigilInput>
			<span>{{chk}}</span>
		</div>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput type="checkbox" v-model="b">
				<VigilItem>Boolean</VigilItem>
			</VigilInput>
			<span>{{b}}</span>
		</div>

		<h3>Radio</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput type="radio" value="1" v-model="rad">
				<VigilItem>1</VigilItem>
			</VigilInput>
			<VigilInput type="radio" value="2" v-model="rad">
				<VigilItem>2</VigilItem>
			</VigilInput>
			<span>{{rad}}</span>
		</div>

		<h3>File</h3>
		<VigilInput type="file"></VigilInput>

		<h3>Icon</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput class="w-60" icon-left="magnify" placeholder="Search"></VigilInput>
			<VigilInput class="w-60" icon-right="magnify" placeholder="Search"></VigilInput>
			<VigilInput icon-right="magnify" type="checkbox"></VigilInput>
			<VigilInput icon-right="magnify" type="radio"></VigilInput>
			<VigilInput icon-left="magnify" type="file"></VigilInput>
		</div>

		<h3>Clearable</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput class="w-60" clearable placeholder="Search" v-model="val"></VigilInput>
			<VigilInput class="w-60" clearable icon-right="magnify" placeholder="Search" v-model="val"></VigilInput>
		</div>

		<h3>Disabled</h3>
		<VigilInput class="w-60" disabled icon-right="magnify" placeholder="Search"></VigilInput>

		<h3>Error</h3>
		<VigilInput class="w-60" error icon-right="magnify" placeholder="Search"></VigilInput>

		<h3>Loading</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput class="w-60" icon-left="magnify" loading placeholder="Search"></VigilInput>
			<VigilInput class="w-60" icon-right="magnify" loading placeholder="Search"></VigilInput>
		</div>

		<h3>Prefix and Suffix</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput icon-left="magnify" placeholder="Search">
				<template #prefix>
					<VigilItem>Prefix</VigilItem>
				</template>
				<VigilItem>Suffix</VigilItem>
			</VigilInput>
		</div>

		<h3>Plain</h3>
		<div class="flex flex-col items-start space-y-2">
			<VigilInput class="w-60" icon-left="magnify" plain placeholder="Search">
				<VigilItem class="input-prefix">Prefix</VigilItem>
				<VigilItem>Suffix</VigilItem>
			</VigilInput>
			<VigilInput plain type="radio" value="1" v-model="rad">
				<VigilItem>1</VigilItem>
			</VigilInput>
			<VigilInput plain type="checkbox" v-model="b">
				<VigilItem>Boolean</VigilItem>
			</VigilInput>
		</div>
	</article>
</template>
