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

  function toggleSidebar(): void {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  return {
    isSidebarOpen,
    sidebarWidth,
    toggleSidebar,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
