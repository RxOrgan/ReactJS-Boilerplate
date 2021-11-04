// libs
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Dispatch } from "redux";
// types
import { TApiProps, TApiConfigs, TAsyncLabels } from "@/types/https";
// others
import { AXIOS_INSTANCE } from "@/https/AxiosInstance";
import { defaultHttpError } from "../tools";

/**
 * buildAsyncAction
 * @description process asynchronous actions
 * @return Promise<void>
 * @param configs
 */
export const buildAsyncAction = <
  TRequestData = AnyObj,
  TResponse = AnyObj,
  TRequestParams = AnyObj,
>(
  configs: TApiConfigs & TAsyncLabels,
  axiosInstance: AxiosInstance = AXIOS_INSTANCE,
) => (props: TApiProps<TRequestData, TRequestParams, TResponse>) => async (
  dispatch: Dispatch,
) => {
  const { data, params, cbSuccess, cbError = defaultHttpError } = props;
  const {
    LOADING_LABEL,
    SUCCESS_LABEL,
    ERROR_LABEL,
    ...axiosConfigs
  } = configs;

  dispatch({
    type: LOADING_LABEL,
  });

  return axiosInstance
    .request({
      data,
      params,
      ...axiosConfigs,
    })
    .then((response: AxiosResponse) => {
      dispatch({
        type: SUCCESS_LABEL,
        payload: response.data,
      });
      if (cbSuccess) cbSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      dispatch({
        type: ERROR_LABEL,
        payload: { error },
      });
      cbError(error);
    });
};
