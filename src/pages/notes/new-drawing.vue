<script setup lang="ts">
import { createCanvas } from '@/utils/drawing-board';
import IconBack from '~icons/eva/arrow-back-outline';
import IconSelect from '~icons/carbon/select-01';
import IconCircle from '~icons/akar-icons/circle';
import IconRectangle from '~icons/akar-icons/square';
import IconTriangle from '~icons/akar-icons/triangle';

import { toggleDraw } from '@/utils/drawing-board/toggleDraw';
import {
  createCircle,
  createRectangle,
  createTriangle,
} from '@/utils/drawing-board/createShapes';

useHead({
  title: 'New Drawing - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Tasks',
    },
  ],
});

onMounted(() => {
  createCanvas('canvas', 'board');
});
</script>

<template>
  <div class="drawing-page">
    <IconBack class="back-btn" @click="$router.back" />
    <div class="pad">
      <div class="controls">
        <button class="control" @click="toggleDraw()">
          <IconSelect /></button
        ><button class="control" @click="createCircle()">
          <IconCircle /></button
        ><button class="control" @click="createRectangle()">
          <IconRectangle /></button
        ><button class="control" @click="createTriangle()">
          <IconTriangle /></button
        ><button class="control">5</button> <button class="control">6</button
        ><button class="control">6</button><button class="control">6</button
        ><button class="control">6</button><button class="control">6</button>
      </div>
      <div id="board" class="board">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawing-page {
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  background-color: var(--color-darker);
  margin-bottom: 2rem;
}

.back-btn {
  margin-left: 2rem;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: margin 0.3s ease-in-out;

  &:hover {
    margin-left: 1.5rem;
  }
}
.pad {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.control {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-dark);
  margin: 0.5rem 2rem;
  color: var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: 24px;
    height: 24px;
    color: var(--color-light);
  }
}

.board {
  height: calc(100vh - 100px);
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: auto;
  flex-grow: 1;
  position: relative;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #555;
    border-radius: 0 5px 5px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-dark);
    border-radius: 0 5px 5px 0;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-darker);
  }
}

#content {
  width: 100%;
  height: 2000px;
  background-color: var(--color-dark);
}
</style>

<route lang="yaml">
meta:
  layout: draw-pad
</route>
