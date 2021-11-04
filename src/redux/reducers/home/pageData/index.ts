// libs
import { AxiosError } from "axios";
// bit
import { TRepoRef } from "@bit/shared/modelRef/repo";
// others
import { API_LABELS } from "@/redux/actionLabels";

type TREDUCER = {
  repos: TRepoRef[];
  isLoading: boolean;
  error?: AxiosError;
};

const initialState: ShallowExpand<TREDUCER> = {
  repos: [],
  isLoading: false,
  error: undefined,
};

export function pageData(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
): TREDUCER {
  switch (type) {
    case API_LABELS.GET_REPOS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case API_LABELS.GET_REPOS_SUCCESS: {
      return {
        ...state,
        ...payload,
        isLoading: false,
        error: undefined,
      };
    }
    case API_LABELS.GET_REPOS_ERROR: {
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
