// libs
import { useState, useCallback } from "react";

type TResult<TResponse> = {
  execute: ({
    data,
    params,
    cbSuccess,
  }: {
    data?: AnyObj;
    params?: AnyObj;
    cbSuccess?: (res: TResponse) => void;
  }) => any;
  pending: boolean;
  response: Expand<TResponse>;
  error: any;
};
/**
 * useAsync
 * @param asyncFunction
 */
export function useAsync<TResponse = AnyObj>(asyncFunction: Function) {
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState<any>({ data: {} });
  const [error, setError] = useState<any>(null);

  const execute = useCallback(
    ({ data, params, cbSuccess }) => {
      setPending(true);
      setResponse({ data: {} });
      setError(null);

      return asyncFunction({
        data,
        params,
      })
        .then((response: any) => {
          setResponse(response.data);
          if (cbSuccess) cbSuccess(response);
        })
        .catch((error: any) => setError(error))
        .finally(() => setPending(false));
    },
    [asyncFunction],
  );

  const result: TResult<TResponse> = { execute, pending, response, error };

  return result;
}
