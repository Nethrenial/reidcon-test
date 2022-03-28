<script setup lang="ts">
const items = ref([
  {
    title: 'Collection1',
    ratio: '3/5',
  },
  {
    title: 'Collection2',
    ratio: '2/6',
  },
  {
    title: 'Collection3',
    ratio: '1/10',
  },
  {
    title: 'Collection4',
    ratio: '4/7',
  },
  {
    title: 'Collection5',
    ratio: '6/8',
  },
]);
</script>

<template>
  <div class="collections-list">
    <CollectionCard v-for="item in items" :key="item.title" :item="item" />
    <AddCollection />
  </div>
</template>
<style lang="scss" scoped>
.collections-list {
  margin-block: 2rem;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

h2 {
  text-align: center;
}

@media (max-width: 768px) {
  .collections-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
