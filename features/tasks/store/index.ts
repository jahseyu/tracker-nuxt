import type { Task } from "~/types";

export const useTasks = defineStore("tasks", () => {
  const tasks: Ref<Task[] | null> = ref(null);

  function fetchTasks(value?: Task[] | null): Promise<Task[]> {
    return useQuery({
      value,
      url: "todos",
    });
  }

  function getTasks(): Promise<Task[]> {
    return fetchTasks(tasks.value).then((r) => (tasks.value = r));
  }

  return { fetchTasks, getTasks };
});
