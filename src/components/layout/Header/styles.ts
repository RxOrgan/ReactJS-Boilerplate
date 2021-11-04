// others
import { buildStyles } from "@/helpers";
import { HEADER_HEIGHT } from "../configs";

export const useStyles = buildStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    display: "flex",
    height: HEADER_HEIGHT,
    padding: "0 10px",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  },
  functions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginLink: {
    marginRight: 10,
  },
}));
