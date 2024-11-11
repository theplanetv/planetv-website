<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'
import { useAdminStore } from '@/stores/admin';

const admin = useAdminStore();
const state = reactive({
  id: '',
  name: '',
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.id) errors.push({ path: 'id', message: 'Required' })
  if (!state.name) errors.push({ path: 'name', message: 'Required' })
  return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
  console.log(event.data)
}
</script>

<template>
  <UForm class="absolute p-5 h-screen w-fit m-auto z-10" v-if="admin.state.displayForm" :validate="validate" :state="state" @submit="onSubmit">
    <UFormGroup label="Id" name="id">
      <UInput v-model="state.id" />
    </UFormGroup>

    <UFormGroup label="Name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UButton @click="admin.updateDisplayForm">
      Cancel
    </UButton>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
