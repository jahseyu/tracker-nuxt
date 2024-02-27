<script setup lang="ts">
import type { Task } from "../types";
import TasksCard from "./tasks-card.vue";

defineProps<{
  items: Task[];
}>();
</script>

<template>
  <div aria-label="Tasks">
    <v-container fluid>
      <v-row>
        <template v-if="items.length > 0">
          <v-col v-for="item in items" :key="item.id" cols="12">
            <TasksCard :item="item" />
          </v-col>
        </template>
        <v-col v-else class="text-h6 text-center" cols="12">
          No tasks found
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
