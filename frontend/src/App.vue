<template>
  <div>
    <HeaderComponent />
    <TopView />
    <ProfileView />
    <SkillsView />
    <CareerView />
    <WorksView />
    <ContactView />
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/view/HeaderComponent.vue';
import TopView from './views/TopView.vue';
import ProfileView from './views/ProfileView.vue';
import SkillsView from './views/SkillsView.vue';
import CareerView from './views/CareerView.vue';
import WorksView from './views/WorksView.vue';
import ContactView from './views/ContactView.vue';
import FooterComponent from './components/view/FooterComponent.vue';
import { provide } from 'vue';
import { STATE_KEY, useStore } from './store';

provide(STATE_KEY, useStore());
</script>
