// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfirmProvider as ConfirmUIProvider } from "material-ui-confirm";
import { CssBaseline } from "@material-ui/core";
import { Provider as ReduxProvider } from "react-redux";
// routes
import appRoutes from "@/routers";
// dataSources
import { confirmDefaultOptions } from "@/dataSources/app";
// others
import { RecursiveRender } from "@/utils/others";
import { store } from "@/configs/redux";
// global styles
import "@/styles/index.css";

/**
 * App
 */
export default function App() {
  return (
    <RecursiveRender
      structure={[
        [BrowserRouter, {}],
        [Suspense, { fallback: "Suspensed" }],
        [ConfirmUIProvider, { defaultOptions: confirmDefaultOptions }],
        [ReduxProvider, { store }],
        [Switch, {}],
      ]}
    >
      <CssBaseline />
      {appRoutes.map((route) => (
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
