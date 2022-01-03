// libs
import { ReactNode } from "react";
import { ConfirmDialogProvider } from "react-mui-confirm";

type TProps = {
  children: ReactNode;
};
export default function ConfirmProvider({ children }: TProps) {
  return <ConfirmDialogProvider>{children}</ConfirmDialogProvider>;
}
