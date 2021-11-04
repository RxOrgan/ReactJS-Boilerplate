// types
import {
  ClassNameMap,
  CreateCSSProperties,
  PropsFunc,
} from "@material-ui/styles";
// types
import { JSSProperties } from "@/types/jss";

/**
 * Generate JSSBag Properties
 */
type JssValue =
  | (string & {})
  | (number & {})
  | Array<string | number | Array<string | number> | "!important">
  | null
  | false;
type NormalCssProperties = JSSProperties<string | number>;
type NormalCssValues<K> = K extends keyof NormalCssProperties
  ? NormalCssProperties[K]
  : JssValue;
type JSSBag =
  | {
      [K in keyof NormalCssProperties]: NormalCssValues<K>;
    }
  | {
      [K: string]: JssValue | JSSBag;
    };

/**
 * This is basically the API of JSS. It defines a Map<string, CSS>,
 * where
 * - the `keys` are the class (names) that will be created
 * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
 *
 * if only `CSSProperties` are matched `Props` are inferred to `any`
 */
export type StyleRules<
  Props extends object = {},
  ClassKey extends string = string,
> = Record<
  ClassKey,
  // JSS property bag
  | JSSBag
  // JSS property bag where values are based on props
  | CreateCSSProperties<Props>
  // JSS property bag based on props
  | PropsFunc<Props, CreateCSSProperties<Props>>
>;

/**
 * Output of buildStyles
 */
export type StyleHook<
  Props extends object = {},
  ClassKey extends string = string,
> = keyof Props extends never
  ? (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey>;
