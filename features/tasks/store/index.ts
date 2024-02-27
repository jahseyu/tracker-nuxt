import type { Task } from "../types";

export const useTasks = defineStore("tasks", () => {
  const tasks: Ref<Task[] | null> = ref(null);

  function fetchTasks(): Promise<Task[]> {
    return useApi("todos");
  }

  function getTasks(): Promise<Task[]> {
    return useQuery({ queryFn: fetchTasks, state: tasks });
  }

  return { fetchTasks, getTasks };
});
