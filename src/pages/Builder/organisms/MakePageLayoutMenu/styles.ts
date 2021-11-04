// others
import { buildStyles } from "@/helpers";

export const useStyles = buildStyles<{ gridContainerWidth: number }>(() => ({
  root: {},
  childrenWrapper: {
    width: ({ gridContainerWidth }) => gridContainerWidth,
    border: "1px solid #888",
  },
}));
