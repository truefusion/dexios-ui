<script setup>
    import { computed } from 'vue';
    import {
        addDays,
        addMonths,
        endOfMonth,
        endOfWeek,
        format,
        isSameDay,
        isSameMonth,
        startOfMonth,
        startOfWeek,
        subMonths,
    } from "date-fns";
	import DexiosButton from './Button.vue';
	import DexiosIcon from './Icon.vue';

    const $props = defineProps({
        modelValue: {
            type: Date,
            default() {
                return new Date();
            },
        },
    });
    const $emit = defineEmits(['update:modelValue']);

    const days = computed(() => {
        var ret = [];
        var current = $props.modelValue;
        var start = startOfWeek(startOfMonth(current));
        var end = endOfWeek(endOfMonth(current));

        var day = start;
        while (day <= end) {
            ret.push({
                current: isSameDay(day, current),
                day,
                month: isSameMonth(day, current),
            });
            day = addDays(day, 1);
        }

        return ret;
    });
    const weekDayNames = computed(() => {
        var ret = [];
        var start = startOfWeek($props.modelValue);
        for (var i = 0; i < 7; i++) {
            ret.push(format(addDays(start, i), "E"));
        }
        return ret;
    });
    const title = computed(() => {
        return {
            month: format($props.modelValue, "MMMM"),
            year: format($props.modelValue, "yyyy"),
        };
    });

    function setActive(d) {
        $emit('update:modelValue', d);
    }
    function nextMonth() {
        setActive(addMonths($props.modelValue, 1));
    }
    function prevMonth() {
        setActive(subMonths($props.modelValue, 1));
    }
</script>

<template>
    <div class="dexios-calendar">
        <slot :days="days" :nextMonth="nextMonth" :prevMonth="prevMonth" :setActive="setActive" :title="title" :weekDayNames="weekDayNames">
			<DexiosIcon class="dexios-btn dexios-btn-plain" icon="chevron-left" @click="prevMonth"></DexiosIcon>
			<div class="col-span-5 flex gap-2 justify-center p-2">
				<span>{{title.month}}</span>
				<span>{{title.year}}</span>
			</div>
			<DexiosIcon class="dexios-btn dexios-btn-plain" icon="chevron-right" @click="nextMonth"></DexiosIcon>
			<div class="p-2" v-for="weekDay in weekDayNames">{{weekDay}}</div>
			<DexiosButton class="dexios-btn-plain dexios-calendar-day" :class="{ 'dexios-calendar-current': current, 'dexios-calendar-month': month }" v-for="{ current, day, month } in days" @click="setActive(day)">
				<span>{{format(day, 'd')}}</span>
			</DexiosButton>
        </slot>
    </div>
</template>
