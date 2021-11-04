// bits
import { ENDPOINTS } from "@bit/shared/endpoints";
import { UpdateRepoRequest } from "@bit/shared/apis/repo";
// others
import { buildXHR, buildAsyncAction } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels";

export const updateRepo = buildAsyncAction<UpdateRepoRequest>({
  url: ENDPOINTS.REPO,
  method: "PATCH",
  LOADING_LABEL: API_LABELS.UPDATE_REPO_BY_ID_LOADING,
  SUCCESS_LABEL: API_LABELS.UPDATE_REPO_BY_ID_SUCCESS,
  ERROR_LABEL: API_LABELS.UPDATE_REPO_BY_ID_ERROR,
});

export const useUpdateRepo = buildXHR<UpdateRepoRequest>({
  url: ENDPOINTS.REPO,
  method: "PATCH",
});
