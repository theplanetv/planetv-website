<script setup lang="ts">
import { useAdminStore } from '@/stores/admin';

const admin = useAdminStore();
</script>

<template>
  <table class="mx-auto w-fit">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in admin.GetData" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
