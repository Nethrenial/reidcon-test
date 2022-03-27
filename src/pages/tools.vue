<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tools - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Dashboard',
    },
  ],
})
</script>

<template>
  <h1>Tools Page</h1>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
