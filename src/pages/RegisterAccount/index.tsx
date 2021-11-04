// libs
import { useForm, FormProvider } from "react-hook-form";
// components
import SubmitBtn from "./atoms/SubmitBtn";
import RegisterForm from "./organisms/RegisterForm";
// others
import { useStyles } from "./styles";

/**
 * RegisterAccount
 */
export default function RegisterAccount() {
  const classes = useStyles("RegisterAccount")();

  return (
    <FormProvider {...useForm()}>
      <div className={classes.root}>
        <RegisterForm />
        <SubmitBtn />
      </div>
    </FormProvider>
  );
}
