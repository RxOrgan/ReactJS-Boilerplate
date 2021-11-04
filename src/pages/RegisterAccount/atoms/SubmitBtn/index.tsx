// hooks
import { useRegisterAccountForm } from "@/react-hook-form/RegisterAccount";
import { useRequestRegisterAccount } from "@/apis/auth/register";
// components
import Svg from "@/components/atoms/svg";
import AppButton from "@/components/atoms/AppButton";
// others
import { setCookie } from "@/utils/storage/cookie";
import { CONSTANTS } from "@/constants";
import { useStyles } from "./styles";

/**
 * SubmitBtn
 */
export default function SubmitBtn() {
  const classes = useStyles("SubmitBtn")();
  const { getValues } = useRegisterAccountForm();
  const { execute: requestRegister, isLoading } = useRequestRegisterAccount();

  return (
    <AppButton
      className={classes.root}
      onClick={() => {
        const { name, email, password } = getValues();
        requestRegister({
          data: { name, email, password },
          cbSuccess: (resData) => {
            setCookie({
              name: CONSTANTS.AUTH.ACCESS_TOKEN,
              value: resData.tokens.access.token,
              days: 30,
            });
            setCookie({
              name: CONSTANTS.AUTH.REFRESH_TOKEN,
              value: resData.tokens.refresh.token,
              days: 30,
            });
          },
        });
      }}
      loading={isLoading}
      endIcon={<Svg type="log-out" className={classes.icon} />}
    >
      Login
    </AppButton>
  );
}
