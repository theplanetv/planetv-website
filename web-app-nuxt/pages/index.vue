<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'mdi:home',
    to: '/',
  },
]
</script>

<template>
  <div class="flex">
    <nav class="h-screen sticky border-r-10 flex flex-col">
      <UVerticalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">
            {{ link.label }}
          </span>
        </template>
      </UVerticalNavigation>
    </nav>

    <h1 class="mx-auto text-center">PlanetV Website</h1>

    <p>Welcome! This is my own selfhost website. A lonely place for me to think on Internet.</p>
  </div>
</template>
