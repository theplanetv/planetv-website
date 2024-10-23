<script setup lang="ts">
type Props = {
  isActive: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <button :class="[
    'py-2 text-white',
    'transition-all',
    'hover:cursor-pointer',
    props.isActive ? 'bg-lime-500' : 'bg-lime-600',
  ]">
    <slot />
  </button>
</template>
