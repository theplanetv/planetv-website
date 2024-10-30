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
  <nav class="h-screen sticky border-r-10 flex flex-col">
    <h1 class="p-10 text-center">Admin Dashboard</h1>
    <UVerticalNavigation :links="links">
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">
          {{ link.label }}
        </span>
      </template>
    </UVerticalNavigation>
  </nav>
</template>
