<script setup lang="ts">
import { useTasks } from "../store";
import TasksList from "./tasks-list.vue";

const { getLsTasks } = useTasks();
const items = getLsTasks();
</script>

<template>
  <ClientOnly><TasksList :items="items" /></ClientOnly>
</template>
