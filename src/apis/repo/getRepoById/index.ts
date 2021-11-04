// bit
import { ENDPOINTS } from "@bit/shared/endpoints";
// helpers, utils
import { buildXHR, buildAsyncAction } from "@/helpers";
// others
import { API_LABELS } from "@/redux/actionLabels";

export const getRepoById = buildAsyncAction({
  url: ENDPOINTS.REPO,
  method: "GET",
  LOADING_LABEL: API_LABELS.GET_REPO_BY_ID_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_REPO_BY_ID_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_REPO_BY_ID_ERROR,
});

export const useGetRepoById = buildXHR({
  url: ENDPOINTS.REPO,
  method: "GET",
});
