<script lang="ts" setup></script>

<template>
  <TheHeader />
  <div class="default-container">
    <TheSidebar />
    <TheDrawingPadContainer>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </TheDrawingPadContainer>
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
}
</style>
