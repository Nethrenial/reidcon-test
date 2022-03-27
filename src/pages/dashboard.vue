<script setup lang="ts">
import DailyOverview from '@/components/page/dashboard/DailyOverview.vue'
import UserStatistics from '@/components/page/dashboard/UserStatistics.vue'

useHead({
  title: 'Dashboard - Remembrall',
  meta: [
    {
      name: 'description',
      content: 'Dashboard',
    },
  ],
})

const taskComponents = [DailyOverview, UserStatistics]

const selectedComponent = ref(0)
</script>

<template>
  <ThePageContainer>
    <h1 class="page-title">
      Hi Nethrenial !
    </h1>
    <p class="page-subtitle">
      How are you feeling?
    </p>
    <p class="page-subtitle">
      You have 5 tasks for today.
    </p>
    <div class="tab-links">
      <button
        class="tab-link"
        :class="selectedComponent === 0 ? 'active' : ''"
        @click="selectedComponent = 0"
      >
        Daily Overview
      </button>

      <button
        class="tab-link"
        :class="selectedComponent === 1 ? 'active' : ''"
        @click="selectedComponent = 1"
      >
        Your Statistics
      </button>
    </div>

    <KeepAlive>
      <transition name="fade" mode="out-in">
        <component :is="taskComponents[selectedComponent]" />
      </transition>
    </KeepAlive>
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

.tab-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;

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

@media (max-width: 768px) {
  .tab-link {
    font-size: 0.8rem;
  }
}

</style>

<route lang="yaml">
meta:
  layout: default
</route>
