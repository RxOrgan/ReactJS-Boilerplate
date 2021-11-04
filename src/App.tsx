// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfirmProvider as ConfirmUIProvider } from "material-ui-confirm";
import { CssBaseline } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
// routes
import appRoutes from "@/routers/appRoutes";
import publicRoutes from "@/routers/publicRoutes";
// components
import AppLayout from "@/components/layout";
// dataSources
import { confirmDefaultOptions } from "@/dataSources/app";
// others
import { RecursiveRender } from "@/utils/others";
import { store } from "@/configs/redux";
import { doAxiosRequestIntercept } from "@/https/Interceptors";
import { doRefreshTokenIntercept } from "@/https/Interceptors/responseInterceptors";
import { MOCKUP_USER } from "./mocks/auth";
// global styles
import "@/styles/index.css";

/**
 * App
 */
export default function App() {
  // TODO: Delete allRoutes and Complete Authentication feature
  doAxiosRequestIntercept({ userId: MOCKUP_USER.user.id });
  doRefreshTokenIntercept();
  const allRoutes = [...appRoutes, ...publicRoutes];

  return (
    <RecursiveRender
      structure={[
        [BrowserRouter, {}],
        [Suspense, { fallback: "Suspensed" }],
        [ConfirmUIProvider, { defaultOptions: confirmDefaultOptions }],
        [ReduxProvider, { store }],
        [AppLayout, {}],
        [Switch, {}],
      ]}
    >
      <CssBaseline />
      {allRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </RecursiveRender>
  );
}
