// libs
import { ReactElement } from "react";
// components
import Spinner from "@/components/atoms/others/Spinner";

/**
 * withLoadingMini
 * @description Replace component by mini loading Icon
 */
export const withLoadingMini = (isLoading: boolean) => (
  component: ReactElement,
) => {
  if (isLoading) return <Spinner />;

  return component;
};
