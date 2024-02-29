import { useStorage } from "@vueuse/core";
import type { Task } from "../types";

export const useTasks = defineStore("tasks", () => {
  const tasks: Ref<Task[] | null> = ref(null);
  const lsTasks: Ref<Task[]> = useStorage("tasks", []);

  function fetchTasks(): Promise<Task[]> {
    return useApi("todos");
  }

  function getTasks(): Promise<Task[]> {
    return useQuery({ queryFn: fetchTasks, state: tasks });
  }

  function getLsTasks(): Task[] {
    return lsTasks.value;
  }

  return { fetchTasks, getTasks, getLsTasks };
});
