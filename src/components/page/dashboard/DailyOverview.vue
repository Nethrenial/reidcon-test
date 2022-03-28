<script setup lang="ts">
const items = ref([
  {
    title: 'Collection1',
    id: 'collection1',
    children: ['item1', 'item2', 'item3', 'item4'],
  },
  {
    title: 'Collection2',
    id: 'collection2',
    children: ['item1', 'item2', 'item3', 'item4', 'item5'],
  },
  {
    title: 'Collection3',
    id: 'collection3',
    children: ['item1', 'item2', 'item3'],
  },
  {
    title: 'Collection4',
    id: 'collection4',
    children: ['item1'],
  },
  {
    title: 'Collection5',
    id: 'collection5',
    children: ['item7'],
  },
]);
</script>

<template>
  <masonry-wall
    :items="items"
    :column-width="350"
    :gap="16"
    class="daily-overview"
  >
    <template #default="{ item }">
      <CollectionItem
        :key="item.id"
        :children="item.children"
        :title="item.title"
      />
    </template>
  </masonry-wall>
</template>
<style lang="scss" scoped>
.daily-overview {
  margin-block: 2rem;
  width: 100%;
  transition: var(--main-transition);
}
</style>
