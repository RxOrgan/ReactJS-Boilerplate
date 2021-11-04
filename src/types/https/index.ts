import { Expand } from "@bit/shared";

export type THttpMethod =
  | "POST"
  | "GET"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "LINK"
  | "UNLINK";

export type TApiConfigs = {
  /** API URL */
  url: string;
  /** http method */
  method: THttpMethod;
};

export type TAsyncLabels = {
  /** Labels for save data in Redux Store */
  LOADING_LABEL: string;
  /** Labels for save data in Redux Store */
  SUCCESS_LABEL: string;
  /** Labels for save data in Redux Store */
  ERROR_LABEL: string;
};

export type TApiProps<TData, TParams, TResponse> = {
  /** Request payload */
  data?: Expand<TData>;
  /** Request Query params */
  params?: Expand<TParams>;
  /** callback on success */
  cbSuccess?: (preprocessedResponse: TResponse) => void;
  /** callback on error */
  cbError?: (err: AnyObj) => void;
};
