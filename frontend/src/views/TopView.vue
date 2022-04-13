<template>
  <div class="bg-primary h-screen" ref="container">
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.career);
const container = ref<HTMLElement>();
onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("top", container.value);
});

</script>
