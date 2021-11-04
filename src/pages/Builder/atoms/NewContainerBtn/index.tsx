// others
import { useStyles } from "./styles";

/**
 * NewContainerBtn
 */
export default function NewContainerBtn() {
  const classes = useStyles("NewContainerBtn")();

  return <div className={classes.root}>NewContainerBtn</div>;
}
