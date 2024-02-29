import { LRUCache } from "lru-cache";
import { hash as ohash } from "ohash";
import type { NitroFetchRequest, NitroFetchOptions } from "nitropack";

const cache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60,
});

export function useApi(
  request: NitroFetchRequest,
  options?: NitroFetchOptions<string, any>
): Promise<any> {
  const hash = ohash([request, options?.params]);
  if (!cache.has(hash)) {
    const config = useRuntimeConfig();
    cache.set(
      hash,
      $fetch(request, { baseURL: config.public.apiBaseUrl, ...options })
        .then((r) => r)
        .catch((e) => {
          cache.delete(hash);
          throw e;
        })
    );
  }
  return cache.get(hash)!;
}
