// libs
import { useForm, FormProvider } from "react-hook-form";
// components
import LoginForm from "./organisms/LoginForm";
// others
import { useStyles } from "./styles";

/**
 * Login
 */
export default function Login() {
  const classes = useStyles("Login")();

  return (
    <FormProvider {...useForm()}>
      <div className={classes.root}>
        <LoginForm />
      </div>
    </FormProvider>
  );
}
