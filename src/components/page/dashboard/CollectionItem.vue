<script setup lang="ts">
const props = defineProps<{
  children: Array<string>;
  title: string;
}>();
</script>

<template>
  <div class="collection-item-container">
    <Collapsible class="collection-item">
      <template #trigger>
        <div class="heading">
          <p class="text">
            {{ props.title }}
          </p>
        </div>
      </template>
      <template #closedTrigger>
        <div class="heading">
          <p class="text">
            {{ props.title }}
          </p>
        </div>
      </template>

      <div class="collapsible">
        <ul v-for="child in props.children" :key="child">
          <li class="item">
            <p class="task">
              {{ child }}
            </p>
            <p class="date">Today 6.00 p.m</p>
          </li>
        </ul>
      </div>
    </Collapsible>
    <div class="link">Go to collection 1</div>
  </div>
</template>

<style lang="scss" scoped>
.collection-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  break-inside: avoid;
  border-radius: 20px;
  color: #fff;
}
.collection-item {
  background-color: var(--color-dark);
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.heading {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: rgb(63, 67, 78);
  color: #fff;
  border-radius: 20px 20px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
}

.link {
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  border-top: 0.5px solid rgba($color: #fff, $alpha: 0.3);
  color: #fff;
  border-radius: 0 0 20px 20px;
  background-color: var(--color-dark);
}

.collapsible {
  height: auto;
  transition: var(--main-transition);

  ul {
    padding: 1rem;
  }

  li {
    padding: 0.5rem 1rem;

    .task {
      font-weight: bold;
    }

    .date {
      font-size: 0.8rem;
      color: #df2e59;
    }
  }
}
</style>
