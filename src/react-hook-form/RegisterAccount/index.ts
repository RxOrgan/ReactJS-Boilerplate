// libs
import { useFormContext } from "react-hook-form";

type TFormValues = {
  name: string;
  email: string;
  password: string;
};

export const useRegisterAccountForm = () => useFormContext<TFormValues>();
