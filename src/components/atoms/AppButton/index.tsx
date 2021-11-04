// libs
import { ReactNode } from "react";
import classNames from "classnames";
import { Button, ButtonProps } from "@material-ui/core";
// components
import Spinner from "@/components/atoms/others/Spinner";
// others
import { useStyles } from "./styles";

type PROPS = { loading: boolean } & ButtonProps;

/**
 * AppButton
 */
export default function AppButton({
  className,
  disabled,
  children,
  endIcon,
  startIcon,
  loading,
  ...btnProps
}: PROPS) {
  const classes = useStyles("AppButton")();

  return (
    <Button
      className={classNames(classes.root, className)}
      disabled={loading || disabled}
      {...getIconProps(loading, endIcon, startIcon)}
      {...btnProps}
    >
      {children}
    </Button>
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
