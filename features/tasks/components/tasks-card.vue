<script setup lang="ts">
import type { Task } from "../types";

defineProps<{
  item?: Task;
  loading?: boolean;
}>();
</script>

<template>
  <v-card height="150">
    <v-skeleton-loader v-if="loading" loading class="h-100" />
    <template v-else-if="item">
      <v-card-title>{{ item.title }}</v-card-title>
    </template>
  </v-card>
</template>
