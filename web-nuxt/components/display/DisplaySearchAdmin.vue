<script setup lang="ts">
const admin = useAdminStore();
</script>

<template>
  <div>
    <input type="text" v-model="admin.search" />
  </div>
</template>