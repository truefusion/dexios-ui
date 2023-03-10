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
    <div class="dexios calendar">
        <slot :days="days" :nextMonth="nextMonth" :prevMonth="prevMonth" :setActive="setActive" :title="title" :weekDayNames="weekDayNames">
            <header>
                <DexiosButton class="plain" icon="chevron-left" @click="prevMonth"></DexiosButton>
                <span>{{title.month}} {{title.year}}</span>
                <DexiosButton class="plain" icon="chevron-right" @click="nextMonth"></DexiosButton>
            </header>
            <div class="dates week-days">
                <span class="week-day" v-for="weekDay in weekDayNames">{{weekDay}}</span>
            </div>
            <div class="dates days">
                <DexiosItem :active="current" class="day" :class="{ current, month }" v-for="{ current, day, month } in days" @click="setActive(day)">
                    <span>{{format(day, 'd')}}</span>
                </DexiosItem>
            </div>
        </slot>
    </div>
</template>

<style lang="less">
.dexios {
        &.calendar {
            header {
                @apply flex items-center justify-between dark:text-white;
            }

            .dates {
                @apply gap-y-2 grid grid-cols-7 text-center;
            }

            .days {
                .day {
                    @apply cursor-pointer font-medium inline-flex items-center justify-center min-h-10 min-w-10;

                    &.current {
                        @apply bg-gray-600 font-bold text-white dark:bg-gray-700;
                    }

                    &:not(.month) {
                        @apply bg-gray-50 font-normal dark:bg-gray-900;
                    }
                }
            }

            .week-days {
                @apply border-t py-2 dark:text-white;

                .week-day {
                    @apply font-bold uppercase;
                }
            }
        }
    }
</style>
