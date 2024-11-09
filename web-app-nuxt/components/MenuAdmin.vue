<script setup lang="ts">
const links = [
  [
    {
      label: 'Back to home',
      icon: 'mdi:home',
      to: '/'
    }
  ],
  [
    {
      label: 'Tag',
      fetchdata: 'blogtag',
      icon: 'mdi:tag',
    },
    {
      label: 'File',
      fetchdata: 'blogfile',
      icon: 'mdi:file',
    }
  ],
  [
    {
      label: 'Settings',
      fetchdata: 'settings',
      icon: 'ic:baseline-settings',
    },
    {
      label: 'Logout',
      icon: 'ic:baseline-logout',
    }
  ]
]
</script>

<template>
  <nav class="h-screen sticky top-0 left-0 border-r flex flex-col">
    <h1 class="font-bold text-2xl text-center p-5">Admin Dashboard</h1>
    <UVerticalNavigation class="px-10" :links="links">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">
          {{ link.label }}
        </span>
      </template>
    </UVerticalNavigation>
  </nav>
</template>