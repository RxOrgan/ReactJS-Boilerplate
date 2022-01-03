// libs
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// routes
import appRoutes from "@/routers";
// providers
import ConfirmProvider from "./providers/MaterialConfirm";
import ReduxProvider from "./providers/ReduxProvider";
// others
import { RecursiveRender } from "@/utils/others";
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
        [ConfirmProvider, {}],
        [ReduxProvider, {}],
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
