// libs
import { AxiosError, AxiosRequestConfig } from "axios";

export type TPreprocessRequestPayload = {
  data: AnyObject | null;
  searchParams?: AnyObject | null;
  others?: AnyObject;
};

type THttpMethod =
  | "POST"
  | "GET"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "LINK"
  | "UNLINK";

export type TApiConfigs<TResponse, TUrlParams> = {
  /** API URL */
  url: string | ((params: TUrlParams) => string);
  /** http method */
  method: THttpMethod;
  /** Default response data for initializing Page at first render */
  initialValue: TResponse;
} & Omit<AxiosRequestConfig, "url" | "method">;

export type TCallbackProps<
  TResponse,
  TRequestBody,
  TRequestQuery,
  TUrlParams,
> = {
  data?: ShallowExpand<TRequestBody>;
  params?: ShallowExpand<TRequestQuery>;
  urlParams?: TUrlParams;
  cbSuccess?: (responseData: TResponse) => void;
  cbError?: (errors: AxiosError) => void;
} & Omit<AxiosRequestConfig, "data" | "params">;

export type TAsyncActionConfigs<
  TResponse,
  TRequestBody,
  TRequestQuery,
  TUrlParams,
> = {
  /** Labels for save data in Redux Store */
  LOADING_LABEL: string;
  /** Labels for save data in Redux Store */
  SUCCESS_LABEL: string;
  /** Labels for save data in Redux Store */
  ERROR_LABEL: string;
  /** Async Hook built by function buildXHR */
  XHRHook: () => [
    execute: (
      cbProps?: TCallbackProps<
        TRequestBody,
        TRequestQuery,
        TResponse,
        TUrlParams
      >
    ) => Promise<void>,
    response: TResponse,
    isLoading: boolean,
    error: AxiosError | null,
  ];
};
