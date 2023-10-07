import Calendar from '../components/Calendar.vue';

const args = {
	dark: false,
	disabled: false,
};

export default {
	title: 'Examples/Calendar',
	component: Calendar,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export const Default = {
	args,
	render: (args) => ({
		components: {
			Calendar,
		},
		setup: () => args,
		template: `
			<div class="p-4" :class="{ dark, 'bg-black': dark }">
				<Calendar :aria-disabled="disabled"></Calendar>
			</div>
		`,
	}),
};

export const Custom = {
	render: (args) => ({
		components: {
			Calendar,
		},
		setup: () => args,
		template: `
			<Calendar class="bg-gray-50 gap-2 flex flex-col p-4 rounded-md">
				<template #default="{ days, nextMonth, prevMonth, setActive, title, weekDayNames }">
					<div class="flex gap-2">
						<div class="cursor-pointer p-2" @click="prevMonth">&lt;</div>
						<div class="p-2">{{ title.month }} {{ title.year }}</div>
						<div class="cursor-pointer p-2" @click="nextMonth">&gt;</div>
					</div>
					<div class="font-bold grid grid-cols-7">
						<div class="p-2 w-10" v-for="weekDay in weekDayNames">{{ weekDay }}</div>
					</div>
					<div class="grid grid-cols-7 overflow-hidden rounded-md">
						<div class="cursor-pointer flex h-10 items-center justify-center p-2 w-10 hover:text-gray-400" :class="{ 'bg-white': month && !current, 'bg-white pointer-events-none text-transparent': !month, 'bg-sky-600 pointer-events-none rounded-full text-white': current }" v-for="{ current, day, month } in days" @click="setActive(day)">
							{{ day.getDate() }}
						</div>
					</div>
				</template>
			</Calendar>
		`,
	}),
};