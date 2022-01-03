// libs
import { useDispatch } from "react-redux";
// types
import { TAsyncActionConfigs, TCallbackProps } from "@/types";
// others
import { defaultHttpError } from "../tools";
import { notify } from "@/utils/notify";

/**
 * buildAsyncAction
 * @description process asynchronous actions
 * @return Promise<void>
 * @param actionConfigs
 * @example
 * // ...Typescript
 * export const useGetUsers = buildXHR<Request, Response>({
    url: "/v1/users",
    method: "GET",
});
  export const useGetUsersAction = buildAsyncAction({
      XHRHook: useGetUsers,
      LOADING_LABEL: "...(REDUX_LABEL)",
      SUCCESS_LABEL: "...(REDUX_LABEL)",
      ERROR_LABEL: "...(REDUX_LABEL)",
  });
  // Usage in React Component
  const { execute, isLoading, response } = useGetUsers();
  execute({
   cbSuccess: (res) => {
     // This is on success callback
   }
  });
 */
export const buildAsyncAction = <
  TRequestData = AnyObject,
  TResponse = AnyObject,
  TRequestParams = AnyObject,
>(
  actionConfigs: TAsyncActionConfigs<TRequestData, TResponse, TRequestParams>,
) => (isNotifySuccess?: "notify-success") => {
  const dispatch = useDispatch();
  const { LOADING_LABEL, SUCCESS_LABEL, ERROR_LABEL, XHRHook } = actionConfigs;
  const { execute: executeXHR, isLoading, response, error } = XHRHook();

  const executeAction = (
    props?: TCallbackProps<TRequestData, TRequestParams, TResponse>,
  ) => {
    const { cbSuccess, cbError, ...runtimeConfigs } = props || {};

    dispatch({
      type: LOADING_LABEL,
    });

    executeXHR({
      ...runtimeConfigs,
      cbSuccess: (responseData) => {
        dispatch({
          type: SUCCESS_LABEL,
          payload: responseData,
        });
        if (cbSuccess) cbSuccess(responseData);
        if (isNotifySuccess === "notify-success") notify.success("Success");
      },
      cbError: (error) => {
        dispatch({
          type: ERROR_LABEL,
          payload: { error },
        });
        if (cbError) cbError(error);
        else defaultHttpError(error);
      },
    });
  };

  return {
    execute: executeAction,
    isLoading,
    response: (response as unknown) as ShallowExpand<TResponse>,
    error,
  };
};
