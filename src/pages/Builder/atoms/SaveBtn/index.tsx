// others
import { updateRepo } from "@/apis/repo/updateRepoById";
import { ContextMenuItem } from "@/components/organisms/ContextMenu";
import { useStore } from "@/hooks/useStore";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";

/**
 * SaveBtn
 */
export default function SaveBtn() {
  const dispatch = useDispatch();
  const classes = useStyles("SaveBtn")();
  const { layout, rowHeight, width, gap, padding, colsQty } = useStore(
    "Builder",
    "pageLayoutReducer",
  );

  return (
    <div className={classes.root}>
      <ContextMenuItem
        onClick={() => {
          dispatch(
            updateRepo({
              data: {
                repoId: "mockup-id",
                anyThings: { layout, rowHeight, width, gap, padding, colsQty },
              } as any,
            }),
          );
        }}
      >
        Save
      </ContextMenuItem>
    </div>
  );
}
