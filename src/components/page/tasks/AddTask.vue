
<script setup lang="ts">
import IconAdd from '~icons/carbon/add'
import { useLayoutStore } from '@/stores/layout.store'

const { addTaskModelOpen } = storeToRefs(useLayoutStore())

</script>
<template>
  <button class="add-task-button" @click="addTaskModelOpen = true">
    <IconAdd class="icon" /> <span class="text">Add task</span>
  </button>
</template>

<style scoped lang="scss">
.add-task-button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 15px;
}

.text {
    margin-left: 0.5rem;
}

.icon {
    background-image: var(--main-gradient);
    height: 24px;
    width: 24px;
    border-radius: 8px;
    color: #fff;

}
</style>
