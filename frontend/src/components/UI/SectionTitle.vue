<template>
  <div class="w-full overflow-hidden px-2 py-5">
    <div ref="container"
      :class="`text-4xl font-title text-shadow italic transition-all duration-300 ${direction == 'left' ? 'text-left' : 'text-right'} ${on ? '' : `opacity-0 ${direction == 'right' ? 'translate-x-10' : '-translate-x-10'}`}`">
      {{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import { VerticalPosition } from '@/@types/schema';
import { isInContent } from '@/plugins/checkScroll';
import { ref, onMounted } from 'vue';

defineProps({
  title: { type: String, required: true },
  direction: { type: String as () => VerticalPosition, required: true },
})

const container = ref<HTMLElement>();
const on = ref(false);

const init = () => {
  if (container.value) on.value = isInContent(container.value);
}

onMounted(() => {
  init()
  window.addEventListener("scroll", init);
});

</script>

<style scoped>
.text-shadow {
  text-shadow: 0.1rem 0.1rem 0.2rem #000a;
}
</style>