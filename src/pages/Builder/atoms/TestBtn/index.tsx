// hooks
import { useStore } from "@/hooks/useStore";
// api, actions
import { useUpdateRepo } from "@/apis/repo/updateRepoById";
// components
import { ContextMenuItem } from "@/components/organisms/ContextMenu";
// others
import { useStyles } from "./styles";

/**
 * TestBtn
 */
export default function TestBtn() {
  const classes = useStyles("TestBtn")();
  const layoutReducer = useStore("Builder", "pageLayoutReducer");
  const { execute } = useUpdateRepo();

  return (
    <div className={classes.root}>
      <ContextMenuItem
        onClick={() => {
          execute({
            data: layoutReducer as any,
          });
        }}
      >
        Add Block
      </ContextMenuItem>
    </div>
  );
}
