// libs
import {
  createStyles,
  makeStyles,
  Theme as DefaultTheme,
} from "@material-ui/core";
import { WithStylesOptions } from "@material-ui/core/styles/withStyles";
// types
import { StyleHook, StyleRules } from "./types";

/**
 * buildStyles
 * Override material-ui makeStyle
 * @see https://material-ui.com/styles/api/
 * @param name className preffix
 * @param styles
 * @param options
 * @type Props - types of useStyles params
 * @returns ReactHook for getting ClassNameMap
 */
export function buildStyles<
  Props extends object = {},
  ClassKey extends string = string,
>(
  styles: (theme: DefaultTheme) => StyleRules<Props, ClassKey>,
  options?: Omit<WithStylesOptions<DefaultTheme>, "withTheme" | "name">,
): (name: string) => StyleHook<Props, ClassKey> {
  return (name) =>
    makeStyles((theme: DefaultTheme) => createStyles(styles(theme)), {
      name,
      ...options,
    });
}
