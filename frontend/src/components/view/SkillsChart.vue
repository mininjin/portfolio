<template>
  <div :class="class" ref="container">
    <div :class="`transition-all duration-300 ${on ? '' : 'translate-y-10 opacity-0'}`">
      <div class="text-xl text-center font-subtitle">{{ skillElement.title }}</div>
      <canvas :width="width" :height="width" ref="canvas"></canvas>
      <div class="mb-2">{{ skillElement.caption }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SkillElement } from '@/@types/schema';
import { setChart } from '@/plugins/chart';
import { isInContent } from '@/plugins/checkScroll';
import { onMounted, ref } from 'vue';

const props = defineProps({
  skillElement: { type: Object as () => SkillElement, required: true },
  class: String,
});

const canvas = ref<HTMLCanvasElement>();
const width = ref(0);
const container = ref<HTMLElement>();
const on = ref(false);

const init = () => {
  if (container.value) {
    width.value = container.value.clientWidth;
    on.value = isInContent(container.value);
  }
}

onMounted(() => {
  init();
  window.addEventListener("scroll", init);
  if (canvas.value) setChart(canvas.value, props.skillElement);
  window.addEventListener("resize", init);
});


</script>

<style scoped>
</style>