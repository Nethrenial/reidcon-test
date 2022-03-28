<script lang="ts" setup>
import IconAdd from '~icons/carbon/add';
import { useLayoutStore } from '@/stores/layout.store';

const layoutStore = useLayoutStore();
const store = storeToRefs(layoutStore);
</script>

<template>
  <TheHeader />
  <div class="default-container">
    <TheSidebar />
    <TheAppContainer>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </TheAppContainer>
    <button
      class="add-new-task-fab"
      @click="store.addTaskModelOpen.value = true"
    >
      <IconAdd />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.default-container {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  // height: calc(100vh - 60px);

  display: grid;
  grid-template-columns: min-content 1fr;
  overflow-y: auto;
}

.add-new-task-fab {
  color: var(--color-light);
  background-image: var(--main-gradient);
  height: 60px;
  width: 60px;
  font-size: 4rem;
  font-weight: bolder;
  border-radius: 50%;
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  z-index: 100;
  transition: var(--main-transition);
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-20%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

@media (max-width: 1024px) {
  // .default-container {

  // }

  //   .add-new-task-fab {

  // }
}

@media (max-width: 768px) {
  .default-container {
    // position: fixed;
    top: 0;
    bottom: 60px;
    left: 0;
    right: 0;
    grid-template-columns: 1fr;
  }

  .add-new-task-fab {
    // height: 60px;
    // width: 60px;
    // font-size: 4rem;
    // bottom: 1rem;
    // right: 50%;
    // transform: translateX(50%);
    // z-index: 0;
    // &:hover {
    //   transform: translateY(-5%) translateX(50%);
    // }
    display: none;
  }
}
</style>
