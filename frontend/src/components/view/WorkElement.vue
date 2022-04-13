<template>
  <div :class="class" ref="container">
    <div :class="`transition-all duration-300 ${on ? '' : 'translate-y-10 opacity-0'}`">
      <img v-if="src" :src="src" :alt="workElement.title" class="w-full object-contain mb-4" @click="toggleModal">
      <a class="text-lg font-bold text-center underline flex items-center justify-center" :href="workElement.href"
        rel="noopener noreferrer" target="_blank">
        <span class="mr-2">{{ workElement.title }}</span>
        <font-awesome-icon icon="arrow-up-right-from-square" class="w-4" />
      </a>
    </div>
  </div>
  <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
    <div v-if="modal"
      class="fixed top-0 left-0 w-full h-full overflow-y-scroll z-50 transition-all duration-300 p-5 md:p-10 flex flex-col"
      :style="{ backgroundColor: color }" @click="toggleModal">
      <div class="max-w-2xl flex-auto flex flex-col bg-primary rounded-xl items-start p-3">
        <div class="w-full flex-grow-0 mb-4">
          <img v-if="src" :src="src" :alt="workElement.title" class="w-full object-contain mb-4">
          <a class="text-lg font-bold text-center underline flex items-center justify-center" :href="workElement.href"
            rel="noopener noreferrer" target="_blank">
            <span class="mr-2">{{ workElement.title }}</span>
            <font-awesome-icon icon="arrow-up-right-from-square" class="w-4" />
          </a>
        </div>
        <div class="p-3">
          <div v-for="info in workElement.information" :key="info.title" class="flex flex-wrap items-center mb-2">
            <div class="px-2 flex items-center font-subtitle text-lg">
              <font-awesome-icon icon="check" class="w-4 mr-2" />
              {{ info.title }}
            </div>
            <div class="px-2 ml-3">{{ info.detail }}</div>
          </div>
          <div class="mt-2">{{ workElement.caption }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { WorkElement } from '@/@types/schema';
import { IMAGE_DIR, WORK_BACKGROUND_OPACITY } from '@/constants/application';
import { isInContent } from '@/plugins/checkScroll';
import { setOpacity } from '@/plugins/opacity';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  workElement: { type: Object as () => WorkElement, required: true },
  class: String,
});
const src = computed(() => props.workElement.src ? IMAGE_DIR + props.workElement.src : undefined);
const color = computed(() => setOpacity(props.workElement.color, WORK_BACKGROUND_OPACITY));
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
</style>