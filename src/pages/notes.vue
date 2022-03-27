<script setup lang="ts">

useHead({
  title: 'Notes - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Notes',
    },
  ],
})

</script>

<template>
  <ThePageContainer>
    <h1 class="page-title">
      Draw
    </h1>
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
</style>

<route lang="yaml">
meta:
  layout: default
</route>
