<script setup lang="ts">
useHead({
  title: 'Dashboard - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Dashboard',
    },
  ],
});
</script>

<template>
  <h1>Dashboard Page</h1>
  <RouterLink to="/dashboard"> Dashboard </RouterLink>
</template>

<!-- <style lang="scss" scoped></style> -->

<route lang="yaml">
meta:
  layout: home
</route>
