<template>
  <div class="h-screen" ref="container">
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
  if (message.value) setTopAnimation(message.value.content);
});

</script>
