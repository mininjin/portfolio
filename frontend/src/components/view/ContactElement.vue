<template>
  <div :class="class" ref="container">
    <div :class="`transition-all duration-300 ${on ? '' : 'translate-y-10 opacity-0'}`">
      <div class="flex items-center justify-center">
        <span class="w-20 h-20 p-2 bg-primary rounded-full shadow inline-flex items-center justify-center" :style="{ color: contactElement.icon.color }">
          <font-awesome-icon type="fab" :icon="contactElement.icon.name" class="w-14" />
        </span>
        <AnchorLink :href="contactElement.href" :name="contactElement.name" class-name="ml-5 text-2xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContactElement } from '@/@types/schema';
import { isInContent } from '@/plugins/checkScroll';
import { setOpacity } from '@/plugins/opacity';
import { computed, onMounted, ref } from 'vue';
import AnchorLink from '../UI/AnchorLink.vue';

const props = defineProps({
  contactElement: { type: Object as () => ContactElement, required: true },
  class: String,
});
const container = ref<HTMLElement>();
const on = ref(false);

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