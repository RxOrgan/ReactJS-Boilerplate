// libs
import { ReactNode } from "react";
// others
import classes from "./Layout.module.scss";

type TProps = {
  children?: ReactNode;
};
/**
 * Layout
 * @param children
 */
export default function Layout({ children }: TProps) {
  return (
    <div className={classes.root}>
      <div className={classes.mainWrapper}>{children}</div>
    </div>
  );
}
