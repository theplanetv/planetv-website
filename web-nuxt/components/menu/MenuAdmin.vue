<script setup lang="ts">
import { faArrowLeft, faTag, faFile } from '@fortawesome/free-solid-svg-icons';
import { MenuOptionAdmin } from '@/stores/admin';

const admin = useAdminStore();

const handleChangeMenuOption = (option: MenuOptionAdmin) => {
  admin.SetActiveOption(option)
}
</script>

<template>
  <nav class="h-screen w-fit sticky top-0 flex">
    <div class="bg-lime-700 flex flex-col gap-y-5">
      <h1 class="p-5 text-center text-2xl font-bold text-white">Admin Dashboard</h1>
        <NuxtLink class="mx-auto w-fit p-3 bg-lime-600 text-white hover:bg-lime-500" to="/">
          <font-awesome class="px-2" :icon="faArrowLeft"/>
          Back to home
        </NuxtLink>

      <div class="flex flex-col">
        <ButtonMenuAdmin
          :isActive="admin.getActiveOption === MenuOptionAdmin.Tag"
          @click="handleChangeMenuOption(MenuOptionAdmin.Tag)"
        >
          <font-awesome class="px-1" :icon="faTag" />Tag
        </ButtonMenuAdmin>
        <ButtonMenuAdmin
          :isActive="admin.getActiveOption === MenuOptionAdmin.File"
          @click="handleChangeMenuOption(MenuOptionAdmin.File)"
        >
          <font-awesome class="px-1" :icon="faFile" />File
        </ButtonMenuAdmin>
      </div>
    </div>
  </nav>
</template>
