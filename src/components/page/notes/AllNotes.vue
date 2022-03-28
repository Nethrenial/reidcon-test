<template>
  <div class="all-notes">
    <div class="new-btns">
      <AddWrittenNote />
      <AddDrawing />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.all-notes {
  margin-block: 2rem;
  width: 100%;
}

.new-btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
</style>
