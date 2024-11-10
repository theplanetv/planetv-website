<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useAdminStore()

// Destructure store properties with storeToRefs for reactivity
const { 
  loading, 
  error, 
  activeOption,
  page,
  search,
} = storeToRefs(store)

// Fetch data and count on component mount
onMounted(async () => {
  await Promise.all([store.fetchCount(), store.fetchData()])
})

// Watchers to refetch data when dependencies change
watch([page, search, activeOption], () => {
  store.fetchCount()
  store.fetchData()
})

watch(activeOption, () => {
  store.fetchCount()
})
</script>

<template>
  <div class="flex">
    <MenuAdmin />

    <div class="mx-auto py-10 w-fit flex flex-col items-center">
      <!-- Loading state -->
      <div v-if="loading" class="text-center py-4">
        Loading...
      </div>

      <!-- Error state -->
      <div v-if="error" class="text-red-500 py-4">
        {{ error }}
      </div>

      <!-- Content -->
      <DisplayAdmin />
    </div>
  </div>
</template>