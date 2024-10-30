import { defineStore } from 'pinia';

import type { BlogData } from '@/libs/types/response';

export enum MenuOptionAdmin {
  Tag = "TAG",
  File = "FILE",
}

export const useAdminStore = defineStore('admin', () => {
  // State
  const limit = ref<number>(10);
  const page = ref<number>(1);
  const search = ref<string>("");
  const activeOption = ref<MenuOptionAdmin>(MenuOptionAdmin.Tag);
  const count = ref<number>(0);
  const data = ref<BlogData>([]);

  // Actions
  const nextPage = (): void => {
    page.value++;
  }
  const previousPage = (): void => {
    if (page.value <= 1) {
      page.value = 1;
      return;
    }
    page.value--;
  }
  const firstPage = (): void => {
    page.value = 1;
  }
  const lastPage = (): void => {
    page.value = Math.ceil(count.value / limit.value) + 1;
  }
  const setPage = (newPage: number): void => {
    page.value = newPage;
  }

  const SetActiveOption = (option: MenuOptionAdmin): void => {
    activeOption.value = option;
  }
  const SetCount = (input: number): void => {
    count.value = input;
  }
  const SetData = (input: BlogData): void => {
    data.value = input;
  }

  // Getters
  const GetLimit = computed(() => limit.value);
  const GetPage = computed(() => page.value);
  const GetSearch = computed(() => search.value);
  const getActiveOption = computed(() => activeOption.value);
  const GetCount = computed(() => count.value);
  const GetData = computed(() => data.value);

  return {
    // limit
    GetLimit,

    // page
    page,
    nextPage,
    previousPage,
    firstPage,
    lastPage,
    setPage,
    GetPage,

    // search
    search,
    GetSearch,

    // activeOption
    getActiveOption,

    // count
    count,
    SetCount,
    GetCount,

    // data
    data,
    SetData,
    GetData,

    // activeOption
    SetActiveOption
  };
});
