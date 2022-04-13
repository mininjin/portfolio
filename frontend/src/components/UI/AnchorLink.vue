<template>
  <a :class="`underline inline-flex items-center ${className || ''}`" :href="href"
    rel="noopener noreferrer" target="_blank">
    <span class="mr-2">{{ name || href }}</span>
    <font-awesome-icon icon="arrow-up-right-from-square" class="w-4" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: { type: String, required: true },
  name: String,
  className: String,
})
</script>