<script setup lang="ts">
import { useAdminStore } from '@/stores/admin';
import { ref } from 'vue';

const admin = useAdminStore();
const searchInput = ref(''); // Temporary search value

const columns = [
  { key: 'id', label: 'Id' },
  { key: 'name', label: 'Name' },
  { key: 'actions' },
];

const actionItems = (row: any) => [
  [
    {
      label: 'Update',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row.id)
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }
  ]
];

const handleSearch = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    admin.search = searchInput.value; // Update store search only on Enter
  }
};
</script>

<template v-if="!loading && !error">
  <UPagination 
    v-model="admin.page"
    :page-count="admin.limit"
    :total="admin.count"
    :first-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', color: 'gray' }"
    :last-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, color: 'gray' }"
    show-first
    show-last
  />

  <div class="my-5 flex justify-between items-center w-full gap-4">
    <UInput 
      v-model="searchInput"
      placeholder="Search" 
      class="w-64"
      @keyup="handleSearch"
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

  <UTable class="my-5" :columns="columns" :rows="admin.data">
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