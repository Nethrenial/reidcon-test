import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  /**
   * True if sidebar is opened, false otherwise
   */
  const isSidebarOpen = ref<boolean>(false)

  /**
   * Returns '250px' if sidebar is opened, '0px' otherwise, use for setting sidebar width
   */
  const sidebarWidth = computed<'250px'|'0px'>(() => (isSidebarOpen.value ? '250px' : '0px'))

  /**
   * True if sidebar is transitioning, false otherwise
   */
  const isSidebarTransitioning = ref<boolean>(false)

  function toggleSidebar(): void {
    isSidebarTransitioning.value = true
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const addTaskModelOpen = ref<boolean>(false)

  return {
    isSidebarOpen,
    isSidebarTransitioning,
    sidebarWidth,
    toggleSidebar,
    addTaskModelOpen,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
