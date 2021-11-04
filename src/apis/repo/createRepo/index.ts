// bit
import { ENDPOINTS } from "@bit/shared/endpoints";
// others
import { buildXHR, buildAsyncAction } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels";

export const createRepo = buildAsyncAction({
  url: ENDPOINTS.REPOS,
  method: "POST",
  LOADING_LABEL: API_LABELS.CREATE_REPO_LOADING,
  SUCCESS_LABEL: API_LABELS.CREATE_REPO_SUCCESS,
  ERROR_LABEL: API_LABELS.CREATE_REPO_ERROR,
});

export const useCreateRepo = buildXHR({
  url: ENDPOINTS.REPOS,
  method: "POST",
});
