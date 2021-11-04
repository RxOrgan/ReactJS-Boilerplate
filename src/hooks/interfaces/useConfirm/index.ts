// libs
import { useConfirm as muiUseConfirm } from "material-ui-confirm";
// types
import { TConfirmProps } from "./type";

/**
 * useConfirm
 * @description Show confirm dialog, base on material-ui-confirm
 * @see https://www.npmjs.com/package/material-ui-confirm
 * @returns Callback for show confirm dialog
 */
export function useConfirm() {
  const muiConfirm = muiUseConfirm();
  const confirm = ({ onOk, onCancel, ...muiProps }: TConfirmProps) => {
    muiConfirm({
      description: "Empty directory then initialize Project?",
      ...muiProps,
    })
      .then(onOk)
      .catch(() => {
        if (onCancel) onCancel();
      });
  };

  return { confirm };
}
