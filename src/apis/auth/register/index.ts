// libs
import axios from "axios";
// bit
import { RegisterRequest, RegisterResponse } from "@bit/shared/apis/auth";
import { ENDPOINTS } from "@bit/shared/endpoints";
// others
import { ENV } from "@/configs/env";
import { buildXHR } from "@/helpers";

export const useRequestRegisterAccount = buildXHR<
  RegisterRequest,
  RegisterResponse
>(
  {
    url: ENDPOINTS.AUTH.REGISTER,
    method: "POST",
  },
  axios.create({ baseURL: ENV.BASE_API }),
);
