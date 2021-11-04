// libs
import { ReactNode } from "react";
// components
import Header from "./Header";
// others
import { useStyles } from "./styles";

type TProps = {
  children: ReactNode;
};
/**
 * AppLayout
 * @param children
 */
export default function AppLayout({ children }: TProps) {
  const classes = useStyles("AppLayout")();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.mainWrapper}>{children}</div>
    </div>
  );
}
