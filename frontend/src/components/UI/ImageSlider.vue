<template>
  <div class="w-full h-full relative overflow-x-hidden md:overflow-x-scroll" ref="container">
    <div class="h-full transition-all flex space-x-4 items-center relative"
      :style="{ transform: `translateX(${-leftOffset}px)` }">
      <img v-for="image in images" :key="image.key" :src="image.src" :alt="image.alt"
        class="h-full object-contain object-center" :ref="setImageDOMs">
    </div>
    <button
      :class="`absolute bounce-left top-0 left-2 h-full ${index > 0 ? 'inline-flex' : 'opacity-0'} items-center md:hidden`"
      :style="{ color, }" @click="onClick(-1)">
      <font-awesome-icon icon="circle-chevron-left" class="w-5" />
    </button>
    <button
      :class="`absolute bounce-right top-0 right-2 h-full ${index < images.length - 1 ? 'inline-flex' : 'opacity-0'} items-center md:hidden`"
      :style="{ color, }" @click="onClick(1)">
      <font-awesome-icon icon="circle-chevron-right" class="w-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ImagePayload } from '@/@types/schema';
import { WORK_BUTTON_OPACITY } from '@/constants/application';
import { getImageSrc } from '@/plugins/image';
import { normalizeNumber, setOpacity } from '@/plugins/utils';
import { computed, ref } from 'vue';

const props = defineProps({
  imagePayloads: { type: Array as () => ImagePayload[], required: true },
  buttonColor: { type: String, required: true }
});

const images = computed(() => props.imagePayloads.map((v, i) => ({ src: getImageSrc(v.src), alt: v.alt, key: v.alt + i })));
const color = computed(() => setOpacity(props.buttonColor, WORK_BUTTON_OPACITY));

const container = ref<HTMLElement>();
const imageDOMs: HTMLElement[] = []
const setImageDOMs = (el: any) => {
  if (el) imageDOMs.push(el)
}

const index = ref(0);
const leftOffset = ref(0);
const onClick = (direction: 1 | -1) => {
  index.value = normalizeNumber(index.value + direction, { max: images.value.length - 1, min: 0 });
  const imageDOM = imageDOMs[index.value]
  leftOffset.value = imageDOM.offsetLeft
}
</script>

<style scoped>
.bounce-left {
  animation: bounce-left 1s infinite cubic-bezier(1, 0, 0, 1);
}

.bounce-right {
  animation: bounce-right 1s infinite cubic-bezier(1, 0, 0, 1);
}

@keyframes bounce-left {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-0.5rem);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes bounce-right {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(0.5rem);
  }

  100% {
    transform: translateX(0);
  }
}
</style>