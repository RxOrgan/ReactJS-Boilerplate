// bit
import { ENDPOINTS } from "@bit/shared/endpoints";
// utils, helpers
import { buildXHR, buildAsyncAction } from "@/helpers";
// others
import { API_LABELS } from "@/redux/actionLabels";

export const deleteRepo = buildAsyncAction({
  url: ENDPOINTS.REPO,
  method: "DELETE",
  LOADING_LABEL: API_LABELS.DELETE_REPO_LOADING,
  SUCCESS_LABEL: API_LABELS.DELETE_REPO_SUCCESS,
  ERROR_LABEL: API_LABELS.DELETE_REPO_ERROR,
});

export const useDeleteRepo = buildXHR({
  url: ENDPOINTS.REPO,
  method: "DELETE",
});
