// libs
import axios from "axios";
// bit
import { LoginRequest, LoginResponse } from "@bit/shared/apis/auth";
import { ENDPOINTS } from "@bit/shared/endpoints";
// others
import { ENV } from "@/configs/env";
import { buildXHR } from "@/helpers";

export const useRequestLogin = buildXHR<LoginRequest, LoginResponse>(
  {
    url: ENDPOINTS.AUTH.LOGIN,
    method: "POST",
  },
  axios.create({ baseURL: ENV.BASE_API }),
);
