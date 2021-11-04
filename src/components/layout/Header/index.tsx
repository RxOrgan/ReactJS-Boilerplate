// others
import { useStyles } from "./styles";

/**
 * Header
 */
export default function Header() {
  const classes = useStyles("Header")();

  return <div className={classes.root}>Header</div>;
}
