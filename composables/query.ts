import { LRUCache } from "lru-cache";
import { hash as ohash } from "ohash";
import type { NitroFetchRequest, NitroFetchOptions } from "nitropack";

const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60,
});

export interface UseQueryParams {
  url: NitroFetchRequest;
  options?: NitroFetchOptions<string, any>;
  value?: any;
}

export function useQuery({
  url,
  options,
  value,
}: UseQueryParams): Promise<any> {
  if (value) return Promise.resolve(value);
  const hash = ohash([url, options?.params]);
  if (!cache.has(hash)) {
    const config = useRuntimeConfig();
    cache.set(
      hash,
      $fetch(url, { baseURL: config.public.apiBaseUrl, ...options })
        .then((r) => r)
        .catch((e) => {
          cache.delete(hash);
          throw e;
        })
    );
  }
  return cache.get(hash)!;
}
