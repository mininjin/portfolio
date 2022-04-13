<template>
  <div class="fixed bottom-0 md:top-0 left-0 w-full z-40 text-primary shadow">
    <div class="flex w-full bg-highlight items-center">
      <div class="p-2 text-left flex-auto text-xl font-bold">{{ APP_NAME }}</div>
      <div class="p-2 flex justify-center items-center" @click="toggleMenu">
        <MenuButton :on="menu" />
      </div>
    </div>
  </div>
  <transition enter-from-class="translate-y-full md:-translate-y-full" leave-to-class="translate-y-full md:-translate-y-full">
    <div v-if="menu"
      class="fixed top-0 left-0 w-full h-full ease-in-out z-30 flex flex-col bg-highlight.5 transition-all duration-500 md:flex-col-reverse">
      <div class="flex-grow" @click="toggleMenu"></div>
      <div class="flex-grow-0 bg-highlight.75  text-xl text-primary font-bold p-4">
        <p v-for="category in categoryList" :key="category.key" class="p-2 mb-2" @click="scrollTo(category.key)">{{
          category.title
        }}</p>
      </div>
      <div class="flex w-full bg-highlight flex-grow-0 opacity-0">
        <div class="p-2 text-left flex-auto text-xl">{{ APP_NAME }}</div>
        <div class="p-2 flex justify-center items-center">
          <MenuButton :on="menu" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { APP_NAME, CATEGORY_LIST } from '@/constants/application';
import { inject, ref, computed } from 'vue';
import { STATE_KEY } from '@/store';
import MenuButton from "@/components/UI/MenuButton.vue";
import { Category } from '@/@types/schema';

const store = inject(STATE_KEY);
const menu = ref(false);
const toggleMenu = () => menu.value = !menu.value;
const scrollTo = (key: Category) => {
  const top = (store?.state.value.containers[key]?.getBoundingClientRect().top || 0) + window.scrollY
  window.scrollTo({ top, behavior: "smooth" });
  menu.value = false
}
const categoryList = computed(() => CATEGORY_LIST.map(key => ({
  title: store?.state.value.messages[key].title ?? "",
  key,
})));
</script>
