<template>
  <nav class="h-screen w-fit flex">
    <div v-if="hideMenu" class="bg-sky-700 flex flex-col">
      <h1 class="p-5 text-center text-xl font-bold text-white">Admin Dashboard</h1>
      <div class="flex flex-col">
        <ButtonMenuAdmin
          :isActive="activeOption === 'tag'"
          @click="handleActiveOption('tag')"
        >
          <font-awesome class="px-1" :icon="faTag" />Tag
        </ButtonMenuAdmin>
        <ButtonMenuAdmin
          :isActive="activeOption === 'file'"
          @click="handleActiveOption('file')"
        >
        <font-awesome class="px-1" :icon="faFile" />File
        </ButtonMenuAdmin>
      </div>
    </div>

    <button @click="handleHideMenu">
      <font-awesome class="text-2xl" :icon="hideMenu ? faChevronRight : faChevronLeft" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faChevronLeft, faChevronRight, faTag, faFile } from '@fortawesome/free-solid-svg-icons';

// state
const hideMenu = ref<boolean>(false)
const activeOption = ref<string>("tag")

// event
const handleHideMenu = (): void =>  {
  hideMenu.value = !hideMenu.value
}
const handleActiveOption = (input: string): void => {
  activeOption.value = input
}
</script>
