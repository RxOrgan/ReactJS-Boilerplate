// components
import Svg from "@/components/atoms/svg";
import AppButton from "@/components/atoms/AppButton";
// hooks
import { useLoginForm } from "@/react-hook-form/Login";
import { useRequestLogin } from "@/apis/auth/login";
// others
import { CONSTANTS } from "@/constants";
import { setCookie } from "@/utils/storage/cookie";
import { useStyles } from "./styles";

/**
 * SubmitBtn
 */
export default function SubmitBtn() {
  const classes = useStyles("SubmitBtn")();
  const { getValues } = useLoginForm();
  const { execute: requestLogin, isLoading } = useRequestLogin();

  return (
    <AppButton
      className={classes.root}
      onClick={() => {
        const { email, password } = getValues();
        requestLogin({
          data: {
            email,
            password,
          },
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
      endIcon={<Svg type="log-out" className={classes.icon} />}
      loading={isLoading}
    >
      Login
    </AppButton>
  );
}
