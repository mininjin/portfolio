<template>
  <span class="w-10 h-10 relative">
    <span
      :class="`absolute rounded-xl transition-all duration-200 bg-primary h-1 w-full ${on ? 'translate-y-4.5  rotate-45' : 'translate-y-3'}`"></span>
    <span
      :class="`absolute rounded-xl transition-all duration-200 bg-primary h-1 w-full ${on ? 'translate-y-4.5  -rotate-45' : 'translate-y-6'}`"></span>
  </span>
</template>

<script setup lang="ts">
defineProps({
  on: { type: Boolean, required: true }
});
</script>
