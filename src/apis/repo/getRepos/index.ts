// bit
import { GetReposRequest } from "@bit/shared/apis/repo";
import { ENDPOINTS } from "@bit/shared/endpoints";
// others
import { buildXHR, buildAsyncAction } from "@/helpers";
import { API_LABELS } from "@/redux/actionLabels";

export const getRepos = buildAsyncAction<GetReposRequest>({
  url: ENDPOINTS.REPOS,
  method: "GET",
  LOADING_LABEL: API_LABELS.GET_REPOS_LOADING,
  SUCCESS_LABEL: API_LABELS.GET_REPOS_SUCCESS,
  ERROR_LABEL: API_LABELS.GET_REPOS_ERROR,
});

export const useGetRepos = buildXHR({
  url: ENDPOINTS.REPOS,
  method: "GET",
});
