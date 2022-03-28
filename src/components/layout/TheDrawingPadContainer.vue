<template>
  <main class="drawing-pad-container">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.drawing-pad-container {
  grid-column: 2 / 3;
  background-color: var(--color-darker);
  color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: #555;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-dark);
    border-radius: 20px;
    transition: background 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-darker);
  }
}

@media (max-width: 1440px) {
  .app-container {
    grid-column: 2 / -1;
    grid-template-columns: 150px 1fr 150px;
    padding-inline: 1rem;
  }
}

@media (max-width: 1024px) {
  .app-container {
    grid-column: 2 / -1;
    grid-template-columns: 1rem 1fr 1rem;
    padding-inline: 1rem;
  }
}

@media (max-width: 768px) {
  .app-container {
    grid-column: 1 / -1;
    grid-template-columns: 1fr;
    padding-inline: 0.5rem;
  }
}
</style>
