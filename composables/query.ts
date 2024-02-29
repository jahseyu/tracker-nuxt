type UseQueryParams = {
  queryFn: () => Promise<any>;
  state?: Ref<any>;
};

export function useQuery({ queryFn, state }: UseQueryParams): Promise<any> {
  if (state?.value) return Promise.resolve(state.value);
  return queryFn().then((r) => {
    if (state?.value) state.value = r;
    return r;
  });
}
