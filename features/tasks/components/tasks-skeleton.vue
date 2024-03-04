<script setup lang="ts">
import TasksCard from './tasks-card.vue';
</script>

<template>
  <div class="d-flex flex-column">
    <TasksCard v-for="i in 10" :key="i" loading class="my-2" />
  </div>
</template>
