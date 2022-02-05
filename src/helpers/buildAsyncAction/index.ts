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
 * export const useFetchUsers = buildXHR<Request, Response>({
    url: "/v1/users",
    method: "GET",
});
  export const useFetchUsersAction = buildAsyncAction({
      XHRHook: useFetchUsers,
      LOADING_LABEL: "...(REDUX_LABEL)",
      SUCCESS_LABEL: "...(REDUX_LABEL)",
      ERROR_LABEL: "...(REDUX_LABEL)",
  });
  // Usage in React Component
  const [fetchUsers, { isLoading, response }] = useFetchUsers();
  fetchUsers({
   cbSuccess: (res) => {
     // This is on success callback
   }
  });
 */
export const buildAsyncAction = <
  TResponse = AnyObject,
  TRequestBody = AnyObject,
  TRequestQuery = AnyObject,
  TUrlParams = AnyObject,
>(
  actionConfigs: TAsyncActionConfigs<
    TResponse,
    TRequestBody,
    TRequestQuery,
    TUrlParams
  >,
) => (isNotifySuccess?: "notify-success") => {
  const dispatch = useDispatch();
  const { LOADING_LABEL, SUCCESS_LABEL, ERROR_LABEL, XHRHook } = actionConfigs;
  const [executeXHR, { response, isLoading, error }] = XHRHook();

  const executeAction = (
    props?: TCallbackProps<TResponse, TRequestBody, TRequestQuery, TUrlParams>,
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

  return [
    executeAction,
    { response: response as unknown, isLoading, error },
  ] as [
    typeof executeAction,
    {
      response: ShallowExpand<TResponse>;
      isLoading: boolean;
      error: typeof error;
    },
  ];
};
