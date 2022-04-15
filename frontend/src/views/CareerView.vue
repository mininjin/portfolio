<template>
  <div class="bg-gradient-to-b to-primary from-secondary py-5" ref="container">
    <div v-if="message" class="max-w-4xl px-5 py-10 mx-auto">
      <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
      <div class="mt-10 max-w-2xl mx-auto">
        <div class="my-5">
          <CareerSection v-for="(block, i) in message.content.blocks" :block="block"
            :prev-block="message.content.blocks[i - 1]" :isEnd="i == message.content.blocks.length - 1" />
        </div>
        <div class="p-3">
          <div class="text-xl font-subtitle mb-5">{{ message.content.comment.title }}</div>
          <p v-for="item in message.content.comment.message" :key="item" class="mb-3">{{ item }}</p>
          <div class="font-title text-2xl text-right px-5">{{message.content.comment.signature}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import CareerSection from '@/components/view/CareerSection.vue';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.career);
const container = ref<HTMLElement>();

onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("career", container.value);
});

</script>
