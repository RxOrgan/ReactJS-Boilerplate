// libs
import { useState } from "react";
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
// types
import { TApiConfigs, TCallbackProps } from "@/types";
// others
import { AXIOS_INSTANCE } from "@/https/AxiosInstance";
import { defaultHttpError } from "../tools";
import { notify } from "@/utils/notify";

/**
 * buildXHR
 * @description build a like-useAsync-hook for request API
 * @param configs
 * @return React Hook for requesting API
 * @example
 * type TRequest = {
    email: string;
    password: string;
   };
   type TParams = {
    someParam: string;
   };
   type TResponse = {
    name: string;
   };
   export const useRequestRegisterAccount = buildXHR<
     TRequest,
     TResponse,
     TParams,
   >({
     url: "/example/api/endpoint/",
     method: "POST",
     initialValue: {}
   });
   // Usage in React Component
     const { execute, isLoading, response } = useRequestRegisterAccount();
     execute({
       cbSuccess: (res) => {
         // This is on success callback
       }
     });
 */
export const buildXHR = <
  TRequestData = AnyObject,
  TResponse = AnyObject,
  TRequestParams = AnyObject,
>(
  { initialValue, ...defaultConfigs }: TApiConfigs<TResponse>,
  axiosInstance: AxiosInstance = AXIOS_INSTANCE,
) => (isNotifySuccess?: "notify-success") => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<TResponse>(initialValue);
  const [error, setError] = useState<AxiosError | null>(null);

  const execute = (
    cbProps?: TCallbackProps<TRequestData, TRequestParams, TResponse>,
  ) => {
    const { cbSuccess, cbError, ...runtimeConfigs } = cbProps || {};
    setLoading(true);

    return axiosInstance
      .request({
        ...defaultConfigs,
        ...runtimeConfigs,
        headers: {
          ...defaultConfigs.headers,
          ...runtimeConfigs.headers,
        },
      })
      .then((response: AxiosResponse<TResponse>) => {
        setResponse(response.data);
        if (cbSuccess) cbSuccess(response.data);
        if (isNotifySuccess === "notify-success") notify.success("Success");
      })
      .catch((error: AxiosError) => {
        setError(error);
        if (cbError) cbError(error);
        else defaultHttpError(error);
      })
      .finally(() => setLoading(false));
  };

  return [execute, response as unknown, isLoading, error] as [
    typeof execute,
    ShallowExpand<TResponse>,
    boolean,
    typeof error,
  ];
};
