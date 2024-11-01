<script setup lang="ts">
const defaultLabelClass: string = "px-5 py-2"
const links = [
  {
    label: 'Home',
    icon: 'mdi:home',
    to: '/',
  },
  {
    label: 'Projects',
    icon: 'ic:twotone-computer',
    to: '/projects',
  },
]
</script>

<template>
  <nav class="h-screen sticky border-r-10 flex flex-col">
    <div class="my-auto h-fit px-3">
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="px-5 py-2 text-xl font-bold group-hover:text-primary relative">
            {{ link.label }}
          </span>
        </template>
      </UVerticalNavigation>
    </div>
  </nav>
</template>