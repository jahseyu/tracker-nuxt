<script setup lang="ts">
import { useAuth } from '@/stores/auth';
import { Tasks } from '@/features/tasks';

const authStore = useAuth();
const { auth } = storeToRefs(authStore);
</script>

<template>
  <v-container>
    <v-btn @click="auth = !auth">Auth</v-btn>
    <Tasks />
  </v-container>
</template>
