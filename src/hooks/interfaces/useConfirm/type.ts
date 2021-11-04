// libs
import { ConfirmOptions } from "material-ui-confirm";

export type TConfirmProps = ConfirmOptions & {
  onOk: () => void;
  onCancel?: () => void;
};
