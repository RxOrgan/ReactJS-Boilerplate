// libs
import GridLayout from "react-grid-layout";
import { useDispatch } from "react-redux";
// hooks
import { useStore } from "@/hooks/useStore";
// others
import { updatePageLayout } from "@/redux/actions/builder/updatePageLayout";
import { useStyles } from "./styles";
import MakePageLayoutMenu from "../MakePageLayoutMenu";

/**
 * MakePageLayoutContainer
 */
export default function MakePageLayoutContainer() {
  const classes = useStyles("MakePageLayoutContainer")();
  const dispatch = useDispatch();
  const { layout, width, gap, padding, colsQty, rowHeight } = useStore(
    "Builder",
    "pageLayoutReducer",
  );

  return (
    <div className={classes.root}>
      <MakePageLayoutMenu>
        <GridLayout
          layout={layout}
          cols={colsQty}
          rowHeight={rowHeight} // px
          width={width}
          useCSSTransforms
          onLayoutChange={(layout) => {
            dispatch(updatePageLayout({ layout }));
          }}
          margin={[gap, gap]}
          containerPadding={padding}
        >
          {layout.map(({ i }) => (
            <div key={i} />
          ))}
        </GridLayout>
      </MakePageLayoutMenu>
    </div>
  );
}
