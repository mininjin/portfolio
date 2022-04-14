<template>
  <div class="bg-tertiary.5 p-5 md:p-10 md:text-lg lg:p-20 lg:text-xl text-center text-tertiary font-bold">{{
    FOOTER_MESSAGE
  }}</div>
  <div class="bg-tertiary p-5 text-primary text-right">{{ COPYRIGHT }}</div>
  <div class="h-14 bg-tertiary md:hidden"></div>
</template>

<script setup lang="ts">
import { FOOTER_MESSAGE, COPYRIGHT } from '@/constants/application';
</script>
