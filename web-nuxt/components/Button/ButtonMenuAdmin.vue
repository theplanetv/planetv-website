<template>
  <button :class="[
    'py-2 bg-sky-600 text-white',
    'hover:cursor-pointer',
      { 'bg-sky-500': isActive }
  ]">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Props = {
  isActive: boolean;
}

defineProps<Props>();
</script>