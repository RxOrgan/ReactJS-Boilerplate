// libs
import { lazy } from "react";
// others
import { ROUTERS } from "@/constants/routers";

/**
 * define main pages routes
 */
export default [
  {
    path: ROUTERS.BUILDER,
    exact: true,
    component: lazy(() => import("@/pages/Builder")),
  },
];
