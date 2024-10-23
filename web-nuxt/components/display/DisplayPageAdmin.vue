<script setup lang="ts">
import { faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ButtonPageAdmin from '@/components/button/ButtonPageAdmin.vue';

const admin = useAdminStore();

const handlePreviousPage = (): void => {
  admin.previousPage()
}
const handleNextPage = (): void => {
  admin.nextPage()
}
const handleFirstPage = (): void => {
  admin.firstPage()
}
const handleLastPage = (): void => {
  admin.lastPage()
}
</script>

<template>
  <div>
    <ButtonPageAdmin @click="handleFirstPage"><font-awesome :icon="faAnglesLeft" /></ButtonPageAdmin>
    <ButtonPageAdmin @click="handlePreviousPage"><font-awesome :icon="faChevronLeft"/></ButtonPageAdmin>
    <input class="text-center" type="number" v-model="admin.page" />
    <ButtonPageAdmin @click="handleNextPage"><font-awesome :icon="faChevronRight"/></ButtonPageAdmin>
    <ButtonPageAdmin @click="handleLastPage"><font-awesome :icon="faAnglesRight" /></ButtonPageAdmin>
  </div>
</template>