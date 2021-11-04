// libs
import { Input } from "@material-ui/core";
// hooks
import { useLoginForm } from "@/react-hook-form/Login";
// components
import SubmitBtn from "../../atoms/SubmitBtn";
// others
import { useStyles } from "./styles";

/**
 * LoginForm
 */
export default function LoginForm() {
  const classes = useStyles("LoginForm")();
  const { register } = useLoginForm();

  return (
    <div className={classes.root}>
      <form>
        <Input {...register("email")} autoComplete="email" />
        <Input
          {...register("password")}
          type="password"
          autoComplete="password"
        />
        <SubmitBtn />
      </form>
    </div>
  );
}
