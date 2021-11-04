// others
import { buildStyles } from "@/helpers";

export const useStyles = buildStyles(() => ({
  root: {
    "& .react-grid-layout": {
      position: "relative",
      transition: "height 200ms ease",
      borderBottom: "1px solid #ddd",
    },
    "& .react-grid-item": {
      transition: "all 200ms ease",
      transitionProperty: "left, top",
      overflow: "hidden",
    },
    "& .react-grid-item.cssTransforms": {
      transitionProperty: "transform",
    },
    "& .react-grid-item.resizing": {
      zIndex: 1,
      willChange: "width, height",
      opacity: 0.9,
    },
    "& .react-grid-item.react-draggable-dragging": {
      transition: "none",
      zIndex: 3,
      willChange: "transform",
    },
    "& .react-grid-item.react-grid-placeholder": {
      background: "red",
      opacity: 0.2,
      transitionDuration: "100ms",
      zIndex: 2,
      userSelect: "none",
    },
    "& .react-grid-item > .react-resizable-handle": {
      position: "absolute",
      width: "20px",
      height: "20px",
      bottom: -10,
      right: -10,
      background: `url(
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><path d='M7 0 L8 0 L8 8 L0 8 L0 7 L7 7 Z'/></svg>"
      )`,
      backgroundPosition: "bottom right",
      padding: " 0 3px 3px 0",
      backgroundRepeat: "no-repeat",
      backgroundOrigin: "content-box",
      boxSizing: "border-box",
      cursor: "se-resize",
    },

    "& .layoutJSON": {
      background: "#ddd",
      border: "1px solid black",
      marginTop: "10px",
      padding: "10px",
    },
    "& .columns": {
      columns: "120px",
    },
    "& .react-grid-item:not(.react-grid-placeholder)": {
      background: "#fff",
      border: "1px solid black",
    },
    "& .react-grid-item.static": {
      background: "#cce",
    },
    "& .react-grid-item .text": {
      fontSize: "24px",
      textAlign: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      height: "24px",
    },
    "& .react-grid-item .minMax": {
      fontSize: "12px",
    },
    "& .react-grid-item .add": {
      cursor: "pointer",
    },
    "& .react-grid-dragHandleExample": {
      cursor: "move",
    },
  },
}));
