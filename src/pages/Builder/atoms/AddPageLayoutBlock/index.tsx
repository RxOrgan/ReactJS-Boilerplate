// libs
import { useDispatch } from "react-redux";
// hooks
import { useStore } from "@/hooks/useStore";
// actions
import { updatePageLayout } from "@/redux/actions/builder/updatePageLayout";
// components
import { ContextMenuItem } from "@/components/organisms/ContextMenu";
// others
import { emptyPageLayoutBlock } from "@/dataSources/builder/emptyPageLayoutBlock";
import { useStyles } from "./styles";

/**
 * AddPageLayoutBlock
 */
export default function AddPageLayoutBlock() {
  const classes = useStyles("AddPageLayoutBlock")();
  const dispatch = useDispatch();
  const { layout } = useStore("Builder", "pageLayoutReducer");

  return (
    <div className={classes.root}>
      <ContextMenuItem
        onClick={() => {
          dispatch(
            updatePageLayout({
              layout: [...layout, emptyPageLayoutBlock(`${layout.length}`)],
            }),
          );
        }}
      >
        Add Block
      </ContextMenuItem>
    </div>
  );
}
