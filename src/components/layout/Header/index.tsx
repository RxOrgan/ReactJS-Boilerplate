// libs
import { Link } from "react-router-dom";
// others
import { ROUTERS } from "@/constants/routers";
import { useStyles } from "./styles";

/**
 * Header
 */
export default function Header() {
  const classes = useStyles("Header")();

  return (
    <div className={classes.root}>
      <Link to={ROUTERS.HOME}>Home</Link>
      <div className={classes.functions}>
        <Link to={ROUTERS.LOGIN} className={classes.loginLink}>
          Login
        </Link>
        <Link to={ROUTERS.REGISTER_ACCOUNT}>Register</Link>
      </div>
    </div>
  );
}
