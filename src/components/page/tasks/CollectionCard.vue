<script setup lang="ts">
import IconBookFill from '~icons/bi/book-fill';

const props = defineProps<{
  item: {
    title: string;
    ratio: string;
  };
}>();
</script>

<template>
  <div class="collection-card-container">
    <div class="collection-card">
      <div class="icon-container">
        <IconBookFill class="icon" />
      </div>

      <p class="title">
        {{ props.item.title }}
      </p>
      <div class="ratio">
        <p class="ratio-text">
          {{ props.item.ratio + ' done' }}
        </p>
        <CircleRatio :ratio="props.item.ratio" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection-card-container {
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    transform: scale(1.05);
  }
}

.collection-card {
  aspect-ratio: 1;
  padding: 1rem;
  background-color: var(--color-dark);
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.icon-container {
  flex-grow: 1;
}

.icon {
  background-image: var(--main-gradient);
  height: 40px;
  width: 40px;
  border-radius: 12.5px;
  padding: 0.5rem;
}

.title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.ratio {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
