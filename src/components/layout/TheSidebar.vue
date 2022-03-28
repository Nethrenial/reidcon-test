<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLayoutStore } from '@/stores/layout.store';

import IconBookFill from '~icons/bi/book-fill';

const layoutStore = useLayoutStore();
const { sidebarWidth } = storeToRefs(layoutStore);
</script>

<template>
  <aside
    class="side-bar"
    @transitionend="
      () => {
        layoutStore.isSidebarTransitioning = false;
      }
    "
  >
    <div class="side-bar-header">
      <p>Collections</p>
    </div>
    <ul class="collection-list">
      <li class="collection-item">
        <div class="collection-icon">
          <IconBookFill />
        </div>
        <p class="collection-text">School</p>
      </li>
      <li class="collection-item">
        <div class="collection-icon">
          <IconBookFill />
        </div>
        <p class="collection-text">School</p>
      </li>
      <li class="collection-item">
        <div class="collection-icon">
          <IconBookFill />
        </div>
        <p class="collection-text">School</p>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.side-bar {
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  background-color: var(--color-dark);
  color: #fff;
  width: v-bind(sidebarWidth);
  transition: var(--main-transition);
  border-radius: 0 20px 20px 0;
}

.side-bar-header {
  color: #fff;
  height: 60px;
  padding-top: 2rem;
  padding-left: 1rem;

  cursor: pointer;

  p {
    font-weight: bold;
  }
}

.collection-list {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: #555;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
}

.collection-item {
  color: var(--color-light);
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #4444;
  }
}

.collection-icon {
  width: 36px;
  height: 36px;
  border-radius: 30%;
  background-color: #f66c68;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }
}

.collection-text {
  font-weight: bold;
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .side-bar {
    display: none;
  }
}
</style>
