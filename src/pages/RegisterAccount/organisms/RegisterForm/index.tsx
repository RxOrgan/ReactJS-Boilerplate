// libs
import { Input } from "@material-ui/core";
// hooks
import { useRegisterAccountForm } from "@/react-hook-form/RegisterAccount";
// others
import { useStyles } from "./styles";

/**
 * RegisterForm
 */
export default function RegisterForm() {
  const classes = useStyles("RegisterForm")();
  const { register } = useRegisterAccountForm();

  return (
    <div className={classes.root}>
      <Input {...register("name")} />
      <Input {...register("email")} />
      <Input {...register("password")} type="password" />
    </div>
  );
}
