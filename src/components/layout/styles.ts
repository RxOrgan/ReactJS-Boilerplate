import { buildStyles } from "@/helpers";
import { HEADER_HEIGHT } from "./configs";

export const useStyles = buildStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    overflow: "auto",
    background: "#fcfcfc",
  },
  mainWrapper: {
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    position: "fixed",
    top: HEADER_HEIGHT,
    left: 0,
    width: "100vw",
    overflow: "auto",
  },
}));
