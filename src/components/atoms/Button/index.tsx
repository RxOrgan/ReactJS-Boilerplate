// libs
import { ReactNode } from "react";
import classNames from "classnames";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";
// components
import Spinner from "@/components/atoms/Spinner";
// others
import { useStyles } from "./styles";

type PROPS = { loading: boolean } & ButtonProps;

/**
 * Button
 */
export default function Button({
  className,
  disabled,
  children,
  endIcon,
  startIcon,
  loading,
  ...btnProps
}: PROPS) {
  const classes = useStyles("Button")();

  return (
    <MuiButton
      className={classNames(classes.root, className)}
      disabled={loading || disabled}
      {...getIconProps(loading, endIcon, startIcon)}
      {...btnProps}
    >
      {children}
    </MuiButton>
  );
}

function getIconProps(
  loading: boolean,
  endIcon: ReactNode,
  startIcon: ReactNode,
) {
  if (!loading) return { endIcon, startIcon };
  if (startIcon) return { startIcon: <Spinner />, endIcon };

  return { endIcon: <Spinner /> };
}
