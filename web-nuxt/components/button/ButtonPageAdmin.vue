<template>
  <button :class="[
    'p-2 bg-lime-600 rounded-full',
    'transition-all',
    'hover:bg-lime-500 hover:cursor-pointer'
  ]">
    <slot />
  </button>
</template>