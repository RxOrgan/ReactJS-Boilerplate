// libs
import { useFormContext } from "react-hook-form";
// types
import { TAllFormValues } from "@/react-hook-form/types";

type TPages = keyof TAllFormValues;

/**
 * useForm
 * @description Faster use by wrapping react-hook-form useFormContext with typescript
 * @param _pageName
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useForm = <TPageName extends TPages>(_pageName: TPageName) =>
  useFormContext<TAllFormValues[TPageName]>();
