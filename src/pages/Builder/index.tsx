// components
import MakePageLayoutContainer from "./organisms/MakePageLayoutContainer";
// others
import { useStyles } from "./styles";

/**
 * Builder
 */
export default function Builder() {
  const classes = useStyles("Builder")();

  return (
    <div className={classes.root}>
      <MakePageLayoutContainer />
    </div>
  );
}
