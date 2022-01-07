// libs
import {
  FieldPath,
  FieldPathValue,
  FieldValues,
  Path,
  PathValue,
  SetValueConfig,
  UnpackNestedValue,
  useFormContext,
} from "react-hook-form";
// types
import { TAllFormValues } from "@/react-hook-form/types";

type TPages = keyof TAllFormValues;
type TFieldName<TFieldValues extends FieldValues> = FieldPath<TFieldValues>;
type TFieldValue<TFieldValues extends FieldValues> = UnpackNestedValue<
  FieldPathValue<TFieldValues, TFieldName<TFieldValues>>
>;
type TSetValues<TFieldValues extends FieldValues> = {
  [key in TFieldName<TFieldValues>]?: TFieldValue<TFieldValues>;
};
type TEntryItem<TFieldValues extends FieldValues> = [
  Path<TFieldValues>,
  UnpackNestedValue<PathValue<TFieldValues, Path<TFieldValues>>>,
];

/**
 * useFormExtra
 * @description Wrap react-hook-form useFormContext with typescript
 * @description Override method trigger by validateForm
 * @description Also return setValues fn for set multi values at once
 * @param _pageName
 * @return validateForm
 * @return setValues
 * @return Rest react-hook-form useForm methods
 * @see https://react-hook-form.com/api/useform
 */
export const useFormExtra = <TPageName extends TPages>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _pageName: TPageName,
) => {
  const { setValue, trigger, ...restFormProps } = useFormContext<
    TAllFormValues[TPageName]
  >();

  return { validateForm, setValues, setValue, ...restFormProps };

  /**
   * setValues
   * @param values
   * @param options - SetValueConfig
   * @example
   * setValues({
   *  fieldName1: "fieldValue1",
   *  fieldName2: "fieldValue2",
   * })
   */
  function setValues(
    values: TSetValues<TAllFormValues[TPageName]>,
    options?: SetValueConfig,
  ) {
    Object.entries(values).forEach((item) => {
      const [name, value] = (item as unknown) as TEntryItem<
        TAllFormValues[TPageName]
      >;
      setValue(name, value, options);
    });
  }

  /**
   * validateForm
   * @param onPassed
   * @param onFail
   * @example
   * validateForm({
   *  onPassed: () => { console.log("Passed validates"); }
   * })
   */
  async function validateForm({
    onPassed,
    onFail,
  }: {
    onPassed: () => void;
    onFail?: () => void;
  }) {
    const isPassedValidate = await trigger();
    if (isPassedValidate) {
      onPassed();
      return;
    }
    if (!isPassedValidate && !!onFail) onFail();
  }
};
