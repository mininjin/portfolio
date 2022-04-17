<template>
  <div class="bg-secondary py-5" ref="container">
    <div v-if="message" class="max-w-4xl px-5 py-10 mx-auto">
      <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
      <div class="mt-10 flex flex-wrap">
        <ContactElement v-for="el in message.content.elements" :contact-element="el" class="mb-5 p-5" />
      </div>
    </div>
  </div>
</template>
      
<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import ContactElement from '@/components/view/ContactElement.vue';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages?.contacts);
const container = ref<HTMLElement>();
onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("contacts", container.value);
});

</script>