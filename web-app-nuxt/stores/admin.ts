// stores/admin.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { BlogData, ResponseData } from '@/libs/types/response'
import { API_URL } from '@/libs/api/config'

// Enums
export enum MenuOptionAdmin {
  Tag = "blogtag",
  File = "blogfile",
}

// Interface for state
interface AdminState {
  limit: number
  page: number
  search: string
  activeOption: MenuOptionAdmin
  count: number
  data: BlogData
  displayForm: boolean
  loading: boolean
  error: string | null
}

// Define store
export const useAdminStore = defineStore('admin', () => {
  // State with proper typing
  const state = ref<AdminState>({
    limit: 10,
    page: 1,
    search: '',
    activeOption: MenuOptionAdmin.Tag,
    count: 0,
    data: [],
    displayForm: false,
    loading: false,
    error: null
  })

  // Getters
  const getDisplayForm = computed(() => state.value.displayForm)
  const getData = computed(() => state.value.data)
  const getLoading = computed(() => state.value.loading)
  const getError = computed(() => state.value.error)
  const getCount = computed(() => state.value.count)
  const getCurrentPage = computed(() => state.value.page)
  const getLimit = computed(() => state.value.limit)

  // Actions
  const fetchCount = async (): Promise<void> => {
    try {
      const endpoint = `${API_URL}/${state.value.activeOption.toLowerCase()}/count`
      const result = await $fetch<ResponseData>(endpoint, {
        method: 'GET',
        params: {
          search: state.value.search
        }
      })
      
      state.value.count = Number(result.data) || 0
    } catch (err) {
      state.value.error = err instanceof Error ? err.message : 'Failed to fetch count'
      console.error('Error fetching count:', err)
    }
  }

  const fetchData = async (): Promise<void> => {
    state.value.loading = true
    state.value.error = null

    try {
      const endpoint = `${API_URL}/${state.value.activeOption.toLowerCase()}`
      const result = await $fetch<ResponseData>(endpoint, {
        method: 'GET',
        params: {
          search: state.value.search,
          limit: state.value.limit,
          page: state.value.page
        }
      })
      
      state.value.data = result.data as BlogData || []
    } catch (err) {
      state.value.error = err instanceof Error ? err.message : 'Failed to fetch data'
      console.error('Error fetching data:', err)
      state.value.data = []
    } finally {
      state.value.loading = false
    }
  }

  // Mutations
  const updateDisplayForm = () => {
    state.value.displayForm = !state.value.displayForm
  }

  const setPage = (newPage: number) => {
    state.value.page = newPage
  }

  const setSearch = (searchTerm: string) => {
    state.value.search = searchTerm
  }

  const setActiveOption = (option: MenuOptionAdmin) => {
    state.value.activeOption = option
  }

  const resetState = () => {
    state.value = {
      limit: 10,
      page: 1,
      search: '',
      activeOption: MenuOptionAdmin.Tag,
      count: 0,
      data: [],
      displayForm: false,
      loading: false,
      error: null
    }
  }

  return {
    // State
    state,
    
    // Getters
    getDisplayForm,
    getData,
    getLoading,
    getError,
    getCount,
    getCurrentPage,
    getLimit,
    
    // Actions
    fetchCount,
    fetchData,
    
    // Mutations
    updateDisplayForm,
    setPage,
    setSearch,
    setActiveOption,
    resetState
  }
})