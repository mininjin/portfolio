<template>
  <div class="bg-primary.75 py-5" ref="container">
    <div v-if="message" class="max-w-4xl px-5 py-10 mx-auto">
      <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
      <div class="flex flex-wrap mt-10">
        <WorkElement v-for="el in message.content.elements" class="mb-5 w-full p-5 md:w-1/2 lg:w-1/3"
          :work-element="el" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import WorkElement from '@/components/view/WorkElement.vue';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages?.works);
const container = ref<HTMLElement>();
onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("works", container.value);
});

</script>
