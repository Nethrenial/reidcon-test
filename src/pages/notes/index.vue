<script setup lang="ts">
import AllNotes from '@/components/page/notes/AllNotes.vue';
import FavouriteCollections from '@/components/page/tasks/FavouriteCollections.vue';
import CollectionsList from '@/components/page/tasks/CollectionsList.vue';

useHead({
  title: 'Notes - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Tasks',
    },
  ],
});

const taskComponents = [AllNotes, CollectionsList, FavouriteCollections];

const selectedComponent = ref(0);
</script>

<template>
  <ThePageContainer>
    <h1 class="page-title">Tasks</h1>
    <p class="page-subtitle">What are you up to?</p>

    <div class="tab-links">
      <button
        class="tab-link"
        :class="selectedComponent === 0 ? 'active' : ''"
        @click="selectedComponent = 0"
      >
        All
      </button>

      <button
        class="tab-link"
        :class="selectedComponent === 1 ? 'active' : ''"
        @click="selectedComponent = 1"
      >
        Collections
      </button>
      <button
        class="tab-link"
        :class="selectedComponent === 2 ? 'active' : ''"
        @click="selectedComponent = 2"
      >
        Favorites
      </button>
    </div>

    <KeepAlive>
      <transition name="fade" mode="out-in">
        <component :is="taskComponents[selectedComponent]" />
      </transition>
    </KeepAlive>
  </ThePageContainer>
</template>

<style lang="scss" scoped>
.page-title {
  font-weight: bold;
  font-size: 2.5rem;
}

.page-subtitle {
  font-size: 1.3rem;
  color: #bbb;
}

.tab-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tab-link {
  display: inline-block;
  margin-top: 3rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 2px solid rgba($color: #333, $alpha: 0.4);
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s linear;

  &.active {
    background-color: rgb(105, 97, 116);
    border: 2px solid rgb(105, 97, 116);
    color: var(--color-light);
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

@media (max-width: 768px) {
  .tab-link {
    font-size: 0.8rem;
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
