<template>
  <div class="bg-secondary.75 py-5" ref="container">
    <div v-if="message" class="max-w-4xl px-5 py-10 mx-auto">
      <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
      <div
        :class="`mt-10 md:flex items-center transition-all duration-300 ${showProfile ? '' : 'translate-y-10 opacity-0'}`"
        ref="profileContainer">
        <div class="flex-grow-0">
          <div class="flex flex-grow-0 items-center mb-5">
            <img v-if="image" :src="image" :alt="message.content.name" class="h-36 object-contain rounded-xl">
            <div class="ml-5">
              <div class="text-lg font-bold mb-3">{{ message.content.nickname }} </div>
              <div class="mb-1">
                <div class="italic text-highlight opacity-75">name</div>
                <div>{{ message.content.name }}</div>
              </div>
              <div class="mb-1">
                <div class="italic text-highlight opacity-75">birth</div>
                <div>{{ birth.birth }}({{ birth.age }})</div>

              </div>
            </div>
          </div>
        </div>
        <div class="p-4 flex-1">
          {{ message.content.comment }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import { getBirth } from "@/plugins/birth"
import { isInContent } from '@/plugins/checkScroll';
import { IMAGE_DIR } from '@/constants/application';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.profile);
const container = ref<HTMLElement>();
const profileContainer = ref<HTMLElement>();
const showProfile = ref(false);
const birth = computed(() => getBirth(store?.state.value.messages.profile.content.birth || ""));
const image = computed(() => message.value?.content.image ? IMAGE_DIR + message.value.content.image : undefined);

const init = () => {
  if (profileContainer.value) showProfile.value = isInContent(profileContainer.value);
}

onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("profile", container.value);
  init();
  window.addEventListener("scroll", init);
});

</script>
