<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from 'nuxt/app';

import { API_URL } from '@/libs/api/config';
import type { BlogData, ResponseData } from '@/libs/types/response';
import type { BlogTag } from '@/libs/types/types';

const activeOption = ref<string>("blogtag");
const limit = ref<number>(10);
const page = ref<number>(1);
const search = ref<string>("");
const count = ref<number>(0);
const data = ref<BlogData>([]); // Changed type to BlogTag[]

// Fetching the count using useFetch
const { data: dataCount } = await useFetch<ResponseData>('/blogtag/count', {
  baseURL: API_URL,
});

const { data: dataData } = await useFetch<ResponseData>(
  `/${activeOption.value}?search=${search.value}&limit=${limit.value}&page=${page.value}`,
  {
    baseURL: API_URL,
  }
);

// Type guard function to check if value is BlogTag[]
function isBlogTagArray(value: unknown): value is BlogTag[] {
  return Array.isArray(value) && value.every(item => 
    typeof item === 'object' && item !== null
    // Add more specific checks based on BlogTag interface
  );
}

// Handle count data
if (dataCount.value?.data !== undefined) {
  const valueInt = Number(dataCount.value.data);
  if (!isNaN(valueInt)) {
    count.value = valueInt;
  } else {
    console.warn("Count value is not a valid number");
  }
}

// Handle blog data
if (dataData.value?.data !== undefined) {
  if (isBlogTagArray(dataData.value.data)) {
    data.value = dataData.value.data as BlogTag[];
  } else {
    console.warn("Received data is not in the expected BlogTag[] format");
    data.value = []; // Reset to empty array if data is invalid
  }
}

console.log(count.value);
console.log(data.value);
</script>

<template>
  <ClientOnly>
  <div class="flex">
    <MenuAdmin />
  </div>
  </ClientOnly>
</template>
