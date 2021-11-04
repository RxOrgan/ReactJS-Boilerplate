// libs
import axios from "axios";
// bit
import { ENDPOINTS } from "@bit/shared/endpoints";
import { RefreshTokenRequest } from "@bit/shared/apis/auth";
// others
import { ENV } from "@/configs/env";
import { buildXHR } from "@/helpers";

export const useRequestRefreshToken = buildXHR<RefreshTokenRequest>(
  {
    url: ENDPOINTS.AUTH.REFRESH_TOKEN,
    method: "POST",
  },
  axios.create({ baseURL: ENV.BASE_API }),
);
