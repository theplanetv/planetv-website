<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { API_URL } from '@/libs/api/config';
import type { BlogData, ResponseData } from '@/libs/types/response';
import type { BlogTag } from '@/libs/types/types';

// Column for table
const columns = [
  {
    key: 'id',
    label: 'Id',
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'actions'
  },
]
const actionItems = (row: any) => [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row.id)
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }
  ]
]


const activeOption = ref<string>("blogtag");
const limit = ref<number>(10);
const page = ref<number>(1);
const search = ref<string>("");
const count = ref<number>(0);
const data = ref<BlogData>([]); 
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

// Function to fetch count
async function fetchCount() {
  try {
    const response = await fetch(`${API_URL}/blogtag/count`);
    if (!response.ok) throw new Error('Failed to fetch count');
    
    const result: ResponseData = await response.json();
    if (result.data !== undefined) {
      const valueInt = Number(result.data);
      if (!isNaN(valueInt)) {
        count.value = valueInt;
      }
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch count';
    console.error('Error fetching count:', err);
  }
}

// Function to fetch data
async function fetchData() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch(
      `${API_URL}/${activeOption.value}?search=${search.value}&limit=${limit.value}&page=${page.value}`
    );
    
    if (!response.ok) throw new Error('Failed to fetch data');
    
    const result: ResponseData = await response.json();
    if (result.data && Array.isArray(result.data)) {
      data.value = result.data as BlogTag[];
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch data';
    console.error('Error fetching data:', err);
    data.value = [];
  } finally {
    loading.value = false;
  }
}

// Initial fetch on component mount
onMounted(async () => {
  await Promise.all([fetchCount(), fetchData()]);
});

// Watch for changes in dependencies and refetch data
watch([page, search, activeOption], () => {
  fetchData();
});

// Optional: Watch for changes in activeOption to refetch count
watch(activeOption, () => {
  fetchCount();
});
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
      <template v-if="!loading && !error">
        <UPagination 
          v-model="page"
          :page-count="limit"
          :total="count"
          :first-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', color: 'gray' }"
          :last-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, color: 'gray' }"
          show-first
          show-last
        />

        <div class="my-5 flex justify-between items-center w-full gap-4">
          <UInput 
            v-model="search" 
            placeholder="Search" 
            class="w-64"
          />
          <UButton
            icon="i-heroicons-plus-circle"
            size="sm"
            color="primary"
            variant="solid"
            label="Add"
            :trailing="false"
          />
        </div>

        <UTable class="my-5" :columns="columns" :rows="data">
          <template #name-data="{ row }">
            <span>{{ row.name }}</span>
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="actionItems(row)">
              <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
            </UDropdown>
          </template>
        </UTable>
      </template>
    </div>
  </div>
</template>