// libs
import { lazy } from "react";
// others
import { ROUTERS } from "@/constants/routers";

/**
 * define public pages routes
 */
export default [
  {
    path: ROUTERS.HOME,
    exact: true,
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: ROUTERS.LOGIN,
    exact: true,
    component: lazy(() => import("@/pages/Login")),
  },
  {
    path: ROUTERS.REGISTER_ACCOUNT,
    exact: true,
    component: lazy(() => import("@/pages/RegisterAccount")),
  },
];
