// libs
import { useFormContext } from "react-hook-form";

type TFormValues = {
  email: string;
  password: string;
};

export const useLoginForm = () => useFormContext<TFormValues>();
