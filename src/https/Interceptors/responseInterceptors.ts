// others
import { CONSTANTS } from "@/constants";
import { getCookie, setCookie } from "@/utils/storage/cookie";
import { AXIOS_INSTANCE } from "../AxiosInstance";

/**
 * doRefreshTokenIntercept
 */
export const doRefreshTokenIntercept = () => {
  AXIOS_INSTANCE.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest.isRefreshed) {
        originalRequest.isRefreshed = true;
        const refreshToken = getCookie(CONSTANTS.AUTH.REFRESH_TOKEN);

        // TODO: Add refresh-token-endpoint
        return AXIOS_INSTANCE.post("ENDPOINTS.AUTH.REFRESH_TOKEN", {
          refreshToken,
        }).then((res) => {
          setCookie({
            name: CONSTANTS.AUTH.ACCESS_TOKEN,
            value: res.data.access.token,
          });
          setCookie({
            name: CONSTANTS.AUTH.REFRESH_TOKEN,
            value: res.data.refresh.token,
          });
          AXIOS_INSTANCE.defaults.headers.common.Authorization = `Bearer ${res.data.access.token}`;

          return AXIOS_INSTANCE(originalRequest);
        });
      }

      return Promise.reject(error);
    },
  );
};
