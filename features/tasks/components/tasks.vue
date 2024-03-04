<script setup lang="ts">
import { useTasks } from '../stores/tasks';
import TasksList from './tasks-list.vue';
import TasksSkeleton from './tasks-skeleton.vue';
import { useAuth } from '@/stores/auth';

const authStore = useAuth();
const { auth } = storeToRefs(authStore);

const { getTasks, getLsTasks } = useTasks();

const {
  data: tasks,
  pending,
  refresh,
} = useAsyncData(() => (auth.value ? getTasks() : Promise.resolve([])));
const lsTasks = getLsTasks();

watch(auth, (val) => {
  if (val) {
    refresh();
  }
});
</script>

<template>
  <div aria-label="Tasks">
    <template v-if="auth">
      <TasksSkeleton v-if="pending" />
      <TasksList v-else :items="tasks ?? []" />
    </template>
    <ClientOnly v-else>
      <template #fallback>
        <TasksSkeleton />
      </template>
      <TasksList :items="lsTasks" />
    </ClientOnly>
  </div>
</template>
