<script setup lang="ts">
import { useTasks } from "../store";
import TasksCard from "./tasks-card.vue";

const { getTasks } = useTasks();
const { data } = await useAsyncData("tasks", () => getTasks());
</script>

<template>
  <div aria-label="Tasks">
    <v-container fluid>
      <v-row>
        <template v-if="data?.length">
          <v-col v-for="item in data" :key="item.id" cols="12">
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
