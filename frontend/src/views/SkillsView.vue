  <template>
    <div class="bg-primary py-5" ref="container">
      <div v-if="message" class="px-5 py-10">
        <div class="max-w-4xl mx-auto">
          <SectionTitle :title="message.title || ''" :direction="message.direction || 'left'" />
        </div>
        <div class="flex flex-wrap mt-10">
          <SkillsChart v-for="el in message.content.elements" class="mb-5 w-full p-5 md:w-1/2 lg:w-1/3"
            :skill-element="el" />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { inject, ref, computed, onMounted } from 'vue';
import { STATE_KEY } from '@/store';
import SectionTitle from '@/components/UI/SectionTitle.vue';
import SkillsChart from '@/components/view/SkillsChart.vue';

const store = inject(STATE_KEY);
const message = computed(() => store?.state.value.messages.skills);
const container = ref<HTMLElement>();
onMounted(() => {
  if (container.value) store?.mutations.setCategoryContainer("skills", container.value);  
});

</script>
