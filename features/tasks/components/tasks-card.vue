<script setup lang="ts">
import type { Task } from "~/types";

defineProps<{
  item: Task;
}>();
</script>

<template>
  <v-card>
    <v-card-title>{{ item.title }}</v-card-title>
  </v-card>
</template>
