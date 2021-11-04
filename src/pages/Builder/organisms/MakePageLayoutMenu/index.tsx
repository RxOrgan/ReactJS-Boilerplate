// libs
import { ReactNode } from "react";
// components
import { ContextMenu } from "@/components/organisms/ContextMenu";
import { useStore } from "@/hooks/useStore";
import AddPageLayoutBlock from "../../atoms/AddPageLayoutBlock";
// others
import { useStyles } from "./styles";
import TestBtn from "../../atoms/TestBtn";

/**
 * MakePageLayoutMenu
 */
export default function MakePageLayoutMenu({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { width } = useStore("Builder", "pageLayoutReducer");
  const classes = useStyles("MakePageLayoutMenu")({
    gridContainerWidth: width,
  });

  return (
    <div className={classes.root}>
      <ContextMenu
        innerComponent={
          <div className={classes.childrenWrapper}>{children}</div>
        }
      >
        <AddPageLayoutBlock />
        <TestBtn />
      </ContextMenu>
    </div>
  );
}
