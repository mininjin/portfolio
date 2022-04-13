<template>
  <div class="bg-tertiary.5 p-5 text-center text-tertiary font-bold">{{ FOOTER_MESSAGE }}</div>
  <div class="bg-tertiary p-5 text-primary text-right">{{ COPYRIGHT }}</div>
  <div class="h-14 bg-tertiary"></div>
</template>

<script setup lang="ts">
import { FOOTER_MESSAGE, COPYRIGHT } from '@/constants/application';
</script>
