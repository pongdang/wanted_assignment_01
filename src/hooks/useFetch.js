import { useState } from 'react';

const fetchClient = new Map();

// @see https://dev.to/charlesstover/react-suspense-with-the-fetch-api-374j
export function useFetch(_keys, promiseFn, client = fetchClient) {
  const [invalidateKey, setInvalidateKey] = useState();
  const keys = [..._keys, invalidateKey];

  const { rejected, resolved, promised } = client.get(String(keys)) || {};

  if (rejected != null) {
    throw rejected;
  }

  if (resolved != null) {
    return {
      data: resolved,
      invalidate: key => {
        setInvalidateKey(key ?? Date.now());
      },
    };
  }

  if (promised != null) {
    throw promised;
  }

  const cache = createFetchCache(keys, promiseFn);

  client.set(String(keys), cache);

  throw cache.promised;
}

function createFetchCache(keys, promiseFn) {
  const cache = {
    keys,
    promised: promiseFn()
      .then(r => (cache.resolved = r))
      .catch(e => (cache.rejected = e)),
  };

  return cache;
}
