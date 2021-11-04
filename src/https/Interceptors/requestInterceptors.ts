// others
import { CONSTANTS } from "@/constants";
import { getCookie } from "@/utils/storage/cookie";
import { AXIOS_INSTANCE } from "../AxiosInstance";

type PROPS = {
  userId: string | undefined;
};
/**
 * Intercept request
 */
const doAxiosRequestIntercept = ({ userId }: PROPS) => {
  if (userId) {
    AXIOS_INSTANCE.interceptors.request.use(
      async (config) => {
        const accessToken = getCookie(CONSTANTS.AUTH.ACCESS_TOKEN);

        return {
          ...config,
          headers: {
            [CONSTANTS.AUTH.AUTHORIZATION]: accessToken,
          },
        };
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }
};

export default doAxiosRequestIntercept;
