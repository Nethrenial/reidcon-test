<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout.store';

useHead({
  title: 'Rememrall',
  meta: [
    {
      name: 'description',
      content:
        'A personal productivity app, in other words, a todo app with an exciting twist!',
    },
  ],
});

const { addTaskModelOpen } = storeToRefs(useLayoutStore());
</script>

<template>
  <router-view />
  <Modal
    v-if="addTaskModelOpen"
    :closable="false"
    @modal-close="
      () => {
        addTaskModelOpen = false;
      }
    "
  >
    <AddTaskForm />
  </Modal>
</template>
