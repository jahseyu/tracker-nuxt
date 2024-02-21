<script setup lang="ts">
import { useTasks } from "../composables/get-tasks";
import TasksCard from "./tasks-card.vue";

const tasks = await useTasks();
</script>

<template>
  <div aria-label="Tasks">
    <v-container fluid>
      <v-row>
        <template v-if="tasks.length > 0">
          <v-col v-for="task in tasks" :key="task.id" cols="12">
            <TasksCard :item="task" />
          </v-col>
        </template>
        <v-col v-else class="text-h6 text-center" cols="12">
          No tasks found
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
