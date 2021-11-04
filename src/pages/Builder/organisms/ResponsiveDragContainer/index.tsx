// libs
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Layouts, Responsive, WidthProvider } from "react-grid-layout";
// others
import { useStyles } from "./styles";

const ResponsiveGridLayout = WidthProvider(Responsive);
const CRT_BREAKPOINT = "md";

/**
 * ResponsiveDragContainer
 */
export default function ResponsiveDragContainer() {
  const classes = useStyles("ResponsiveDragContainer")();
  const [boardData, setBoardData] = useState<Layouts>({ [CRT_BREAKPOINT]: [] });

  return (
    <div className={classes.root}>
      <Button
        onClick={() => {
          setBoardData((crtBoard) => {
            const nextItemIndex = crtBoard[CRT_BREAKPOINT].length;

            return {
              md: [
                ...crtBoard[CRT_BREAKPOINT],
                {
                  w: 5,
                  h: 3,
                  x: 1,
                  y: 1,
                  i: `${nextItemIndex}`,
                },
              ],
            };
          });
        }}
      >
        Click me
      </Button>
      <ResponsiveGridLayout
        layouts={boardData}
        compactType="vertical"
        onLayoutChange={(_, newBoard) => {
          setBoardData(newBoard);
        }}
        breakpoints={{ xl: 1200, lg: 992, md: 768, sm: 480, xs: 0 }}
        cols={{ xl: 44, lg: 31, md: 24, sm: 18, xs: 8 }}
        rowHeight={20} // px
      >
        {boardData[CRT_BREAKPOINT].map((_, i) => (
          <div
            key={i}
            onContextMenu={(e) => {
              e.stopPropagation();
              console.log(111);
            }}
          >
            <Button
              onClick={() => {
                setBoardData((crt) => {
                  const { sm, xl } = crt;
                  sm[i].isResizable = false;
                  xl[i].isResizable = false;

                  return { sm, xl };
                });
                console.log(boardData);
              }}
            >
              Block {i}
            </Button>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
