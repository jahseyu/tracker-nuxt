import { LRUCache } from "lru-cache";
import { hash as ohash } from "ohash";
import type { NitroFetchOptions } from "nitropack";

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60,
});

interface Params {
  query: {
    url: string;
    options?: NitroFetchOptions<string, any>;
  };
  stateful?: boolean;
}

export function useQuery({ query, stateful }: Params): Promise<any> {
  const config = useRuntimeConfig();
  const hash = ohash([query.url, query.options?.params]);
  const state = useState<any>(hash, () => null);
  if (state.value) return state.value;
  if (!promiseCache.has(hash)) {
    promiseCache.set(
      hash,
      $fetch(query.url, {
        baseURL: config.public.apiBaseUrl,
        ...query.options,
      })
        .then((res) => {
          if (stateful) state.value = res;
          return res;
        })
        .catch((e) => {
          promiseCache.delete(hash);
          throw e;
        })
    );
  }
  return promiseCache.get(hash)!;
}
