<script setup lang="ts">

import IconCollections from '~icons/fluent/collections-24-filled'

const props = withDefaults(defineProps<{
  options: Array<string>
  default?: string | null
  tabindex?: number
}>(), {
  default: null,
  tabindex: 0,
})

const selected = ref(props.default
  ? props.default
  : props.options.length > 0
    ? props.options[0]
    : null)

const open = ref(false)

const emit = defineEmits<{
  (e: 'input', val: string | null): void
}>()

onMounted(() => {
  emit('input', selected.value)
})

</script>

<template>
  <div class="custom-select" :tabindex="props.tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <p class="selected-option">
        {{
          selected
        }}
      </p>
      <IconCollections class="selected-icon" />
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;

}
.selected {
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
.selected.open {
  border: 2px solid orangered;
}

 .items {
  color: #fff;
  border-radius: 10px;
  position: absolute;
  background-color: var(--color-darker);
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 2px;
 max-height: 200px;
  overflow-x: auto;
  overflow-y: auto;

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

 .items div {
  color: #fff;
  padding: 0.5rem 1em;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;
}

.items div:hover {
    padding: 0.5rem 1.2rem;
  background-image: var(--main-gradient);
}

.selectHide {
  display: none;
}
</style>
