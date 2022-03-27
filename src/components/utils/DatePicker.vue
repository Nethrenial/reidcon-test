<script setup lang="ts">
import { format } from 'date-fns'
import { DAYS, MONTHS_LIST, getYearList, isLeapYear } from '@/utils/dates.utils'
import IconClose from '~icons/ep/close-bold'

// getting today date act as start date
const date = new Date()

// props
const props = withDefaults(defineProps<{
  range?: string
  modelValue?: string
}>(), {
  range: (function() { const d = new Date(); return `${d.getFullYear()}-${d.getFullYear() + 10}` })(),
})

// emits
const emit = defineEmits<{
  // to work with v-model
  (e: 'update:modelValue', val: string): void
}>()

const yearArray = computed(() => { return getYearList(props.range) })
const selectedYearIndex = ref(yearArray.value.indexOf(date.getFullYear()))
const selectedMonthIndex = ref(date.getMonth())
const selectedDay = ref(date.getDate())
const firstDayOfMonth = computed(() => {
  const date = new Date(yearArray.value[selectedYearIndex.value], selectedMonthIndex.value, 1)
  return date.getDay()
})

const formattedDate = computed(() => {
  const d = new Date(yearArray.value[selectedYearIndex.value], selectedMonthIndex.value, selectedDay.value)
  const dayName = format(d, 'cccc')
  const dayNum = format(d, 'do')
  const monthName = format(d, 'MMMM')
  const year = format(d, 'yyyy')
  // construct as Monday, 1st of January 2019
  return `${dayName}, ${dayNum} of ${monthName} ${year}`
})

const getDateRange = computed((): [number, number] => {
  const monthsWith31Days = [0, 2, 4, 6, 7, 9, 11]
  const monthsWith30Days = [3, 5, 8, 10]
  let range: [number, number] = [1, 31]
  if (selectedMonthIndex.value === 1) {
    const year = yearArray.value[selectedYearIndex.value]
    if (isLeapYear(year))
      range = [1, 29]
    else
      range = [1, 28]
  }

  else if (monthsWith31Days.includes(selectedMonthIndex.value)) {
    range = [1, 31]
  }
  else if (monthsWith30Days.includes(selectedMonthIndex.value)) {
    range = [1, 30]
  }
  return range
})

// change visibility of calander
const open = ref(false)
function toggleOpen(value: boolean) {
  open.value = value
}

// functions to change calander date
const toNextYear = () => {
  selectedYearIndex.value++
  selectedDay.value = 1
  if (selectedYearIndex.value >= yearArray.value.length)
    selectedYearIndex.value = 0
}

function toPreviousYear() {
  selectedYearIndex.value--
  selectedDay.value = 1
  if (selectedYearIndex.value < 0)
    selectedYearIndex.value = yearArray.value.length - 1
}

function toNextMonth() {
  selectedMonthIndex.value++
  selectedDay.value = 1
  if (selectedMonthIndex.value >= MONTHS_LIST.length) {
    selectedMonthIndex.value = 0
    toNextYear()
  }
}

function toPreviousMonth() {
  selectedMonthIndex.value--
  selectedDay.value = 1
  if (selectedMonthIndex.value < 0) {
    selectedMonthIndex.value = MONTHS_LIST.length - 1
    toPreviousYear()
  }
}

// function to select date
function prepareDate() {
  const dateString = `${yearArray.value[selectedYearIndex.value]}-${selectedMonthIndex.value + 1}-${selectedDay.value}`
  emit('update:modelValue', dateString)
}

</script>

<template>
  <div class="date-picker">
    <div class="selected-date" @click="toggleOpen(true)">
      <p class="text">
        {{
          formattedDate
        }}
      </p>
    </div>
    <div v-if="open" class="calandar">
      <p class="deadline">
        Need to finish by
      </p>
      <div class="change-year">
        <span class="back" @click="toPreviousYear">
          {{
            "<<"
          }}
        </span>
        <p class="selected-year">
          {{
            yearArray[selectedYearIndex]
          }}
        </p>
        <span class="next" @click="toNextYear">
          {{
            ">>"
          }}
        </span>
      </div>
      <div class="change-month">
        <span class="back" @click="toPreviousMonth">
          {{
            "<<"
          }}
        </span>
        <p class="selected-month">
          {{
            MONTHS_LIST[selectedMonthIndex]

          }}
        </p>
        <span class="next" @click="toNextMonth">
          {{
            ">>"
          }}
        </span>
      </div>
      <div class="month">
        <div class="day-labels">
          <p v-for="day in DAYS" :key="day" class="day-label">
            {{
              day
            }}
          </p>
        </div>
        <div class="day-nums">
          <div
            v-for="i in 35" :key="i" class="day" :class="i == selectedDay + firstDayOfMonth ? 'selected': ''" @click="()=>{

              const t = i - firstDayOfMonth
              if(getDateRange[0] <= t && t <= getDateRange[1]){
                selectedDay = i - firstDayOfMonth
                prepareDate()
              }
            }"
          >
            {{
              getDateRange[0] <= i - firstDayOfMonth && i - firstDayOfMonth <= getDateRange[1] ? i - firstDayOfMonth : ' '
            }}
          </div>
        </div>
      </div>
      <IconClose class="close-btn" @click="toggleOpen(false)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.date-picker {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}
.selected-date {
  padding: 10px 20px;
  background-color: var(--color-darker);
  border-radius: 10px;
  border: 2px solid transparent;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:active {
      border: 2px solid orangered;
  }

}
 .calandar {
  color: #fff;
  position: absolute;
  background-color: var(--color-darker);
  top: -500%;
  left: 50%;
  transform: translatex(-50%);
  z-index: 1;
  padding: 1rem;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

   &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #555;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-dark);
    border-radius: 20px;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-darker);
  }
}

.deadline {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0;
  padding: 0;
  margin-bottom: 1rem;
  color: var(--color-light);
  width: 100%;
}

.change-year {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;

  span {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.next:hover {
      transform: translateX(2px);
    }

    &.back:hover {
      transform: translateX(-2px);
    }
  }
}

.selected-year {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
  padding: 0;
  color: var(--color-light);
}

.change-month {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;

  span {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.next:hover {
      transform: translateX(2px);
    }

    &.back:hover {
      transform: translateX(-2px);
    }
  }
}

.selected-month {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
  padding: 0;
  color: var(--color-light);
}

.month {
  width: 100%;
  background-color: var(--color-dark);
  padding:  0.5rem ;
}

.day-labels {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(7, 1fr);
}

.day-label {
  font-size: 0.7rem;
  aspect-ratio: 1;
  color: var(--color-light);
  text-align: center;
  // background-color: teal;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.day-nums {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5rem;
  width: 100%;
  aspect-ratio: 7 / 5;
}
.day {
  background-color: var(--color-darker);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  aspect-ratio: 1;
  width: 30px;

  &.selected {
  background-image: var(--main-gradient);

  }

  &:hover {
    transform: scale(1.1);
  }
}

.close-btn {
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;
    width: 18px;
    height: 18px;
    color: #fff;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(180deg) scale(1.1);
    }
}
.selectHide {
  display: none;

}

@media (max-width: 768px) {
  .calandar {
    padding: 0.5rem;
    border-radius: 10px;
  }
}
</style>
