<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLayoutStore } from '@/stores/layout.store'
import IconAdd from '~icons/carbon/add'
import IconMenu from '~icons/lucide/menu'
import IconDashboard from '~icons/bxs/dashboard'
import IconNotebook from '~icons/fluent/notebook-24-filled'
import IconTaskList from '~icons/fluent/clipboard-task-list-ltr-24-filled'
import IconTools from '~icons/entypo/tools'
import IconSearch from '~icons/bi/search'
import IconBell from '~icons/bytesize/bell'

const layoutStore = useLayoutStore()
const store = storeToRefs(layoutStore)

</script>

<template>
  <header class="header">
    <IconMenu class="menu-btn" @click="layoutStore.toggleSidebar" />
    <nav class="nav">
      <ul class="nav-list">
        <RouterLink to="/dashboard" class="nav-link" active-class="active">
          <IconDashboard class="nav-icon" />
          <p class="nav-text">
            Dashboard
          </p>
        </RouterLink>
        <RouterLink to="/tasks" class="nav-link" active-class="active">
          <IconTaskList class="nav-icon" />
          <p class="nav-text">
            Tasks
          </p>
        </RouterLink>
        <button class="add-new-task-fab" @click="store.addTaskModelOpen.value = true">
          <IconAdd />
        </button>
        <RouterLink to="/notes" class="nav-link" active-class="active">
          <IconNotebook class="nav-icon" />
          <p class="nav-text">
            Notes
          </p>
        </RouterLink>
        <RouterLink to="/tools" class="nav-link" active-class="active">
          <IconTools class="nav-icon" />
          <p class="nav-text">
            Tools
          </p>
        </RouterLink>
      </ul>
    </nav>
    <ul class="utility-list">
      <IconSearch class="search" />
      <IconBell class="notifications" />
      <figure class="avatar" />
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--color-darker);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/** header fixed to bottom if screen is smaller than 768px */

.menu-btn {
  margin-inline: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}

.nav {
  flex-grow: 1;
  &-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &-link {
    margin-right: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: var(--main-transition);
    padding: 0.5rem;
    border-radius: 10px;
    font-weight: bold;
    /* stylelint-disable-next-line scss/no-global-function-names */
    color: darken($color: white, $amount: 60);
    // color: color.adjust($color: white, $amount: -60);

    &:hover {
      color: var(--color-light);
    }

    &.active {
      color: var(--color-light);
    }
  }

  &-icon {
    margin-right: 1rem;
    width: 24px;
    height: 24px;
  }
}

.utility-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 1rem;

  & > * {
    cursor: pointer;
  }

  .search {
    margin-right: 1.5rem;
    width: 24px;
    height: 24px;
  }

  .notifications {
    margin-right: 1.5rem;
    width: 30px;
    height: 30px;
  }
  .avatar {
    /** round avata with random image as background */
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: url(https://i.pravatar.cc/36);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
  }
}

.add-new-task-fab {

  display: none;

}

@media (max-width: 768px) {
    .menu-btn {
    display: none;
  }
  .header {
    // position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
  }
.nav {
    &-list {
    justify-content: space-evenly;

  }
  &-link {
    margin-right: 0rem;
    justify-content: center;

  }

&-icon {
    margin-right: 0rem;
    width: 30px;
    height: 30px;
  }

  &-text {
    display: none;
  }
}

  .utility-list {
  display: none;
  }

   .add-new-task-fab {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-light);
  background-image: var(--main-gradient);
  height: 50px;
  width: 50px;
  font-size: 4rem;
  font-weight: bolder;
  border-radius: 50%;
  transition: var(--main-transition);
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: translateY(-5%);
  }
}

}
</style>
