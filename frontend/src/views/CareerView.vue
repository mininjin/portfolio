<template>
  <div class="bg-secondary py-5" ref="container">
    <div v-if="message" class="max-w-4xl px-5 py-10 mx-auto">
      <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.career);
const container = ref<HTMLElement>();

onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("career", container.value);
});

</script>
