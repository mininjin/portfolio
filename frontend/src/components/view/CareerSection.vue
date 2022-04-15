<template>
  <div ref="container">
    <div v-if="block.margin" class="h-10"></div>
    <div :class="`flex items-stretch ${position == 'left' ? 'flex-row' : 'flex-row-reverse'}`">
      <div class="flex-auto flex flex-col">
        <div v-if="prevBlock && prevBlock.position != position"
          :class="`h-3 bg-primary relative overflow-x-hidden mb-10 ${position == 'left' ? ' shadow-bar-horizontal-left' : 'shadow-bar-horizontal-right'} z-10`">
          <div
            :class="`h-full w-full absolute left-0 top-0 bg-highlight transition-all ${inContainer ? '' : position == 'left' ? '-translate-x-full' : 'translate-x-full'}`">
          </div>
        </div>
        <div class="px-5 mb-10 overflow-x-hidden">
          <div
            :class="`transition-all duration-300 ${inContainer ? '' : 'opacity-0 ' + (position == 'left' ? '-translate-x-10' : 'translate-x-10')}`">
            <div v-for="item in block.data" class="mb-4">
              <div v-if="item.type == 'text'">
                <div class="text-sm mb-2">{{ item.term }}</div>
                <div class="text-2xl font-subtitle mb-2">{{ item.title }}</div>
                <div v-if="item.explanation" class="mb-2">{{ item.explanation }}</div>
              </div>
              <img v-else-if="item.type == 'image'" :src="getImageSrc(item.src)" :alt="item.alt"
                class="w-full max-h-72 object-contain mx-auto">
            </div>
          </div>
        </div>
      </div>
      <div class="w-3 bg-primary shadow-bar-vertical relative flex-shrink-0">
        <div class="w-full bg-highlight transition-all z-10" :style="{ height: barHeight + '%' }">
        </div>
        <div v-if="iconPositionY >= 0 && iconPositionY <= 100" class="absolute flex items-center left-0 z-20"
          :style="{ top: iconPositionY + '%' }">
          <span
            class="rounded-full w-6 h-6 inline-block bg-tertiary shadow-icon -translate-x-1.5 -translate-y-1.5"></span>
        </div>
      </div>
    </div>
    <div v-if="block.margin" class="h-10"></div>
  </div>
</template>

<script setup lang="ts">
import { CareerBlock } from '@/@types/schema';
import { isInContent } from '@/plugins/checkScroll';
import { normalizeNumber } from '@/plugins/utils';
import { getImageSrc } from '@/plugins/image';
import { onMounted, ref } from 'vue';

const props = defineProps({
  block: { type: Object as () => CareerBlock, required: true },
  prevBlock: Object as () => CareerBlock,
  isEnd: Boolean
})
const position = props.block.position
const barHeight = ref(0);
const container = ref<HTMLElement>();
const inContainer = ref(false);
const iconPositionY = ref(-1);

const init = () => {
  if (container.value) {
    inContainer.value = isInContent(container.value);
    const positionY = (window.innerHeight * 3 / 4 - container.value.getBoundingClientRect().top) / container.value.clientHeight * 100
    iconPositionY.value = props.isEnd ? normalizeNumber(positionY, { min: -1, max: 100 }) : positionY;
    barHeight.value = normalizeNumber(positionY, { max: 100 });
  }
}

onMounted(() => {
  init();
  window.addEventListener("scroll", () => {
    init();
  });
});

</script>

<style scoped>
.shadow-bar-vertical {
  box-shadow: 0.2rem 0.2rem 0 0 #000a;
}

.shadow-bar-horizontal-left {
  box-shadow: 0 0.2rem 0 0 #000a;
}

.shadow-bar-horizontal-right {
  box-shadow: 0.2rem 0.2rem 0 0 #000a;
}

.shadow-icon {
  box-shadow: 0.3rem 0.3rem 0 0 #000a;
}
</style>