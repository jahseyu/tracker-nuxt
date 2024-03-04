<script setup lang="ts">
import type { Task } from '../types';
import TasksCard from './tasks-card.vue';

defineProps<{
  items: Task[];
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <template v-if="items.length > 0">
      <TasksCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="my-2"
      />
    </template>
    <p v-else class="text-center">No tasks found</p>
  </div>
</template>
