<template>
  <div v-if="message" class="h-screen bg-primary.5" ref="container">
    <div class="text-2xl md:text-3xl lg:text-4xl text-center text-shadow pt-10 md:pt-20 lg:pt-24">{{
        message.content.message
    }}</div>
  </div>
  <div class="fixed top-0 left-0 w-full h-full -z-10" ref="renderDOM"></div>
</template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import { useTopAnimation } from '@/composables/useTopAnimation';
import { useLoadingAnimation } from '@/composables/useLoadingAnimation';
import { FONT_URL } from "@/constants/three"
import { LOADING_PROGRESS_RATE, PROGRESS_END } from "@/constants/loading"
import webfontloader from "webfontloader";

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages?.top);
const { renderDOM, init, setTopAnimation } = useTopAnimation();
const { setProgress } = useLoadingAnimation();
const container = ref<HTMLElement>();
onMounted(async () => {
  if (container.value) store?.mutations.setCategoryContainer("top", container.value);
  setProgress(LOADING_PROGRESS_RATE.onMounted);
  await store?.actions.fetchMessages();
  if (renderDOM.value) init();
  setProgress(LOADING_PROGRESS_RATE.onFetchedMessage);
  await new Promise<void>((resolve, reject) => {
    webfontloader.load({
      google: {
        families: ["Grape Nuts", "Kaisei HarunoUmi:700", "Noto Serif JP:200"]
      },
      active: resolve, inactive: reject
    })
  });
  setProgress(LOADING_PROGRESS_RATE.onFetchedWebfont);
  const fontRes = await fetch(FONT_URL);
  setProgress(LOADING_PROGRESS_RATE.onFetchedFont);
  const font = await fontRes.json();
  setProgress(LOADING_PROGRESS_RATE.onCreatedFont);
  if (message.value) setTopAnimation(message.value.content.animation, font);
  setProgress(PROGRESS_END);
});

</script>

<style scoped>
.text-shadow {
  text-shadow: 0.1rem 0.1rem 0.2rem #000a;
}
</style>