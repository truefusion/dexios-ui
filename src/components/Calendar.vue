<script setup>
    import { computed, ref } from 'vue';
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
    <div class="vigil calendar">
        <slot :days="days" :nextMonth="nextMonth" :prevMonth="prevMonth" :setActive="setActive" :title="title" :weekDayNames="weekDayNames">
            <header>
                <VigilButton icon="chevron-left" plain @click="prevMonth"></VigilButton>
                <span>{{title.month}} {{title.year}}</span>
                <VigilButton icon="chevron-right" plain @click="nextMonth"></VigilButton>
            </header>
            <div class="dates week-days">
                <span class="week-day" v-for="weekDay in weekDayNames">{{weekDay}}</span>
            </div>
            <div class="dates days">
                <VigilItem :active="current" class="day" :class="{ current, month }" v-for="{ current, day, month } in days" @click="setActive(day)">
                    <span>{{format(day, 'd')}}</span>
                </VigilItem>
            </div>
        </slot>
    </div>
</template>

<style lang="less">
    .vigil {
        &.calendar {
            header {
                @apply flex items-center justify-between dark:text-white;
            }

            .dates {
                @apply gap-2 grid grid-cols-7 text-center;
            }

            .days {
                .day {
                    @apply min-h-8 min-w-8;

                    &.current {
                        @apply font-bold;

                        > * {
                            @apply bg-gray-50 p-2 dark:bg-gray-700;
                        }
                    }

                    &:not(.month) {
                        @apply opacity-40;
                    }

                    > * {
                        @apply h-8 inline-flex items-center justify-center rounded-full text-center w-8;
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
