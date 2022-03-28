<script setup lang="ts">
import IconAdd from '~icons/carbon/add';
const modalShown = ref(false);
</script>

<template>
  <div class="add-new" @click="modalShown = true">
    <IconAdd class="icon" />
  </div>
  <Modal
    v-if="modalShown"
    :closable="true"
    @modal-close="
      () => {
        modalShown = false;
      }
    "
  />
</template>

<style lang="scss" scoped>
.add-new {
  border: 2px solid rgba(255, 255, 255, 0.1);
  aspect-ratio: 1;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  .icon {
    transition: var(--main-transition);
    width: 4rem;
    height: 4rem;
  }

  &:hover > .icon {
    transform: scale(2);
  }
}
</style>
