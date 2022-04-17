<template>
  <div :class="class" ref="container">
    <div :class="`transition-all duration-300 ${on ? '' : 'translate-y-10 opacity-0'}`">
      <div class="cursor-pointer" @click="toggleModal">
        <div class="p-2 flex items-center justify-center">Click
          <font-awesome-icon icon="hand-point-down" class="w-4 ml-2 animate-bounce" />
        </div>
        <img v-if="src" :src="src" :alt="workElement.title" class="w-full object-contain mb-4">
      </div>
      <div class="text-center">
        <anchor-link :href="workElement.href" :name="workElement.title" class-name="text-lg font-bold" />
      </div>
    </div>
  </div>
  <transition enter-from-class="opacity-0 left-1/2 -right-1/2 w-0" leave-to-class="opacity-0 left-1/2 -right-1/2 w-0">
    <div v-if="modal"
      class="fixed top-0 left-0 right-0 w-full h-full z-50 transition-al animation-timing duration-300 overflow-x-hidden">
      <div class="w-screen h-screen p-5 md:p-10 flex flex-col overflow-y-scroll" :style="{ backgroundColor: color }">
        <div class="flex-auto mx-auto flex flex-col bg-primary rounded items-start p-3">
          <div class="w-full flex justify-end text-tertiary mb-2">
            <font-awesome-icon icon="circle-xmark" class="w-8 h-8 rounded-full shadow-strong cursor-pointer"
              @click="toggleModal" />
          </div>
          <div class="flex items-start flex-wrap">
            <div class="w-full md:w-2/3 max-w-lg flex-grow-0 mb-4 mx-auto">
              <div class="w-full mb-4">
                <image-slider :image-payloads="workElement.images" :button-color="workElement.color.button" />
              </div>
              <div class="text-center">
                <anchor-link :href="workElement.href" :name="workElement.title" class-name="text-lg font-bold" />
              </div>
            </div>
            <div class="p-3 flex-auto md:w-1/3 md:pl-6">
              <div v-for="info in workElement.information" :key="info.title" class="flex flex-wrap items-center mb-2">
                <div class="px-2 flex items-center font-subtitle text-lg">
                  <font-awesome-icon icon="check" class="w-4 mr-2" />
                  {{ info.title }}
                </div>
                <div class="px-2 ml-3">{{ info.detail }}</div>
              </div>
              <div class="mt-2 p-3">{{ workElement.caption }}</div>
            </div>
          </div>
          <div class="w-full"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { WorkElement } from '@/@types/schema';
import { WORK_BACKGROUND_OPACITY } from '@/constants/application';
import { isInContent } from '@/plugins/checkScroll';
import { getImageSrc } from '@/plugins/image';
import { setOpacity } from '@/plugins/utils';
import { computed, onMounted, ref } from 'vue';
import AnchorLink from '../UI/AnchorLink.vue';
import ImageSlider from '../UI/ImageSlider.vue';

const props = defineProps({
  workElement: { type: Object as () => WorkElement, required: true },
  class: String,
});
const src = computed(() => props.workElement.images[0] ? getImageSrc(props.workElement.images[0].src) : undefined);
const color = computed(() => setOpacity(props.workElement.color.theme, WORK_BACKGROUND_OPACITY));
const container = ref<HTMLElement>();
const modal = ref(false);
const on = ref(false);

const toggleModal = () => modal.value = !modal.value
const init = () => {
  if (container.value) {
    on.value = isInContent(container.value);
  }
}

onMounted(() => {
  init();
  window.addEventListener("scroll", init);
});

</script>

<style scoped>
.animation-timing {
  transition-timing-function: cubic-bezier(.8, 0, .5, 1);
}

.shadow-strong {
  box-shadow: 0.2rem 0.1rem 0.2rem 0 #000a;
}
</style>