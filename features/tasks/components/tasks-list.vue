<script setup lang="ts">
import TasksCard from "./tasks-card.vue";
import type { Task } from "~/types";

const tasks: Task[] = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
];
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
