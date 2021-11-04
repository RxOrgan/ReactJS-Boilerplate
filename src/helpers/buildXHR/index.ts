// libs
import { useState, useCallback } from "react";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
// types
import { TApiConfigs } from "@/types/https";
// others
import { AXIOS_INSTANCE } from "@/https/AxiosInstance";
import { defaultHttpError } from "../tools";

type TCallbackProps<TRequestData, TRequestParams, TResponse> = {
  data?: TRequestData;
  params?: TRequestParams;
  cbSuccess?: (response: TResponse) => void;
  cbError?: (errors: AxiosError) => void;
};

/**
 * buildXHR
 * @description build a like-useAsync-hook for request API
 * @param configs
 * @return React Hook for requesting API
 */
export const buildXHR = <
  TRequestData = AnyObj,
  TResponse = AnyObj,
  TRequestParams = AnyObj,
>(
  configs: TApiConfigs,
  axiosInstance: AxiosInstance = AXIOS_INSTANCE,
) => () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<TResponse | null>(null);
  const [error, setError] = useState<AnyObj | null>(null);

  const execute = useCallback(
    ({
      data,
      params,
      cbSuccess,
      cbError = defaultHttpError,
    }: TCallbackProps<TRequestData, TRequestParams, TResponse>) => {
      setLoading(true);
      setResponse(null);
      setError(null);

      return axiosInstance
        .request({
          data,
          params,
          ...configs,
        })
        .then((response: AxiosResponse<TResponse>) => {
          setResponse(response.data);
          if (cbSuccess) cbSuccess(response.data);
        })
        .catch((error: AxiosError) => {
          setError(error);
          cbError(error);
        })
        .finally(() => setLoading(false));
    },
    [],
  );

  return {
    execute,
    isLoading,
    response,
    error,
  };
};
