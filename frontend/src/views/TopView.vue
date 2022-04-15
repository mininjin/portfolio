<template>
  <div v-if="message" class="h-screen bg-primary.5" ref="container">
    <div class="text-2xl md:text-3xl lg:text-4xl text-center text-shadow pt-10 md:pt-20 lg:pt-24">{{ message.content.message }}</div>
  </div>
  <div class="fixed top-0 left-0 w-full h-full -z-10" ref="renderDOM"></div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import { useTopAnimation } from '@/composables/useTopAnimation';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.top);
const { renderDOM, init, setTopAnimation } = useTopAnimation();
const container = ref<HTMLElement>();
onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("top", container.value);
  if (renderDOM.value) init();
  if (message.value) setTopAnimation(message.value.content.animation);
});

</script>

<style scoped>
.text-shadow{
  text-shadow: 0.1rem 0.1rem 0.2rem #000a;
}
</style>