<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';
import { useAdminStore } from '@/stores/admin';

import { API_URL } from '@/libs/api/config';
import type { BlogData, ResponseData } from '@/libs/types/response';
import type { BlogTag } from '@/libs/types/types';

const admin = useAdminStore();
const error = ref<string | null>(null);
const isLoading = ref<boolean>(true);

// Fetching the count using useFetch
const { data: dataCount, error: errorCount, status: statusCount } = await useFetch<ResponseData>('/blogtag/count', {
  baseURL: API_URL,
});
const { data: dataData, error: errorData, status: statusData } = await useFetch<ResponseData>(
  `/blogtag?search=${admin.GetSearch}&limit=${admin.GetLimit}&page=${admin.GetPage}`, {
  baseURL: API_URL,
});

if (errorCount.value) {
  error.value = errorCount.value.message;
  console.error("Error fetching count:", error.value);
} else if (dataCount.value) {
  const valueInt = dataCount.value.data as number;
  if (!isNaN(valueInt)) {
    admin.SetCount(valueInt);
  } else {
    console.warn("Parsed value is not a valid number");
  }
}

if (errorData.value) {
  error.value = errorData.value.message;
  console.error("Error fetching data:", error.value);
} else if (dataData.value) {
  const blogtagArray: BlogData = dataData.value.data as BlogTag[];
  admin.SetData(blogtagArray);
}

isLoading.value = (statusCount.value === 'pending' || statusData.value === 'pending'); // Set loading state based on pending
</script>

<template>
  <ClientOnly>
    <div class="flex">
      <MenuAdmin />
      <p v-if="isLoading">Loading...</p>
      <p v-if="error">{{ error }}</p>
      <DisplayDataAdmin />
    </div>
  </ClientOnly>
</template>
