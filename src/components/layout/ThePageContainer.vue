<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  grid-column: 2 / 3;
  //   padding-top: 2rem;
  //   margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .page-container {
    grid-column: 1 / -1;
  }
}
</style>
