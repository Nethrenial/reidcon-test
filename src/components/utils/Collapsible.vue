<template>
  <div class="Collapsible">
    <button
      type="button"
      :class="{
        Collapsible__trigger: true,
        'Collapsible__trigger--open': !transitioning && open,
        'Collapsible__trigger--closed': !transitioning && !open,
        'Collapsible__trigger--transitioning': transitioning,
      }"
      @click.prevent="handleClick"
    >
      <slot v-if="open" name="trigger">
        <span class="Collapsible__triggerLabel">
          {{ !open ? closedLabel : openLabel }}
        </span>
      </slot>

      <slot v-if="!open" name="closedTrigger">
        <slot name="trigger">
          <span class="Collapsible__triggerLabel">{{
            !open ? closedLabel : openLabel
          }}</span>
        </slot>
      </slot>
    </button>

    <div
      :class="{
        Collapsible__content: true,
        'Collapsible__content--open': !transitioning && open,
        'Collapsible__content--closed': !transitioning && !open,
        'Collapsible__content--transitioning': transitioning,
      }"
      :style="{
        height,
        transitionProperty: 'height',
        transitionDuration,
        transitionTimingFunction,
        transitionDelay,
      }"
      @transitionend="handleEnd"
    >
      <div ref="inner" class="Collapsible__contentInner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  openLabel: {
    type: String,
    default: 'Close me',
  },
  closedLabel: {
    type: String,
    default: 'Open me',
  },
  transitionDuration: {
    type: String,
    default: '400ms',
  },
  transitionTimingFunction: {
    type: String,
    default: 'ease',
  },
  transitionDelay: {
    type: String,
    default: '0s',
  },
  isOpen: {
    default: false,
    type: Boolean,
  },
  onCollapse: {
    default: () => {},
    type: Function,
  },
})

const open = ref(props.isOpen)
const height = ref(props.isOpen ? 'auto' : '0px')

const closeOnNextTick = ref(false)
const transitioning = ref(false)

const inner = ref<HTMLElement | null>(null)

watch(open, (newVal, oldVal) => {
  transitioning.value = true
  height.value = `${(inner.value as HTMLElement).scrollHeight}px`
  if (oldVal === true)
    closeOnNextTick.value = true
})

watch(props, (newVal, oldVal) => {
  open.value = newVal.isOpen
})

onUpdated(() => {
  nextTick(() => {
    window.setTimeout(() => {
      if (closeOnNextTick.value) {
        height.value = '0px'
        closeOnNextTick.value = false
      }
    })
  })
})

function handleClick() {
  props.onCollapse(!props.isOpen)
  open.value = !open.value
}

function handleEnd() {
  if (height.value !== '0px')
    height.value = 'auto'
  transitioning.value = false
}
</script>

<style lang="scss" scoped>
.Collapsible__content {
  overflow: hidden;
}
.Collapsible__contentInner {
  height: auto;
}
.Collapsible__trigger {
  appearance: none;
  border: 0;
  background: transparent;
  border-radius: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  text-align: inherit;
  color: inherit;
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  cursor: pointer;
}
</style>
