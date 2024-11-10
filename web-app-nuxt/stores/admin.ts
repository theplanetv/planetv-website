// stores/admin.ts
import { defineStore } from 'pinia'
import type { BlogData, ResponseData } from '@/libs/types/response'
import { API_URL } from '~/libs/api/config'

export enum MenuOptionAdmin {
  Tag = "blogtag",
  File = "blogfile",
}

export const useAdminStore = defineStore('admin', () => {
  // const config = useRuntimeConfig()
  
  // State
  const limit = ref<number>(10)
  const page = ref<number>(1)
  const search = ref<string>('')
  const activeOption = ref<MenuOptionAdmin>(MenuOptionAdmin.Tag)
  const count = ref<number>(0)
  const data = ref<BlogData>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // Fetch count
  const fetchCount = async (): Promise<void> => {
    try {
      const endpoint = `${API_URL}/${activeOption.value.toLowerCase()}/count`
      
      const result = await $fetch<ResponseData>(endpoint, {
        method: 'GET',
        params: {
          search: search.value
        }
      })
      count.value = Number(result.data) || 0
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch count'
      console.error('Error fetching count:', err)
    }
  }

  // Fetch data
  const fetchData = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const endpoint = `${API_URL}/${activeOption.value.toLowerCase()}`
      
      const result = await $fetch<ResponseData>(endpoint, {
        method: 'GET',
        params: {
          search: search.value,
          limit: limit.value,
          page: page.value
        }
      })

      data.value = result.data as BlogData || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch data'
      console.error('Error fetching data:', err)
      data.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    limit,
    page,
    search,
    activeOption,
    count,
    data,
    loading,
    error,

    // Actions
    fetchCount,
    fetchData,
  }
})