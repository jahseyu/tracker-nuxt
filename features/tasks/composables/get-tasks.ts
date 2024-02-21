import type { Task } from "~/types";

export function useTasks(
  params: Record<string, string | number | boolean | undefined> = {}
): Promise<Task[]> {
  return useQuery({
    query: { url: "todos", options: { params } },
    stateful: true,
  });
}
