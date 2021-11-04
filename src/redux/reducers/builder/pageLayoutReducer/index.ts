// libs
import { Layout } from "react-grid-layout";
// others
import { BUILDER_LABELS } from "@/redux/actionLabels";
import { emptyPageLayoutBlock } from "@/dataSources/builder/emptyPageLayoutBlock";

type TREDUCER = {
  layout: Layout[];
  width: number;
  gap: number;
  padding: [number, number];
  colsQty: number;
  rowHeight: number;
};

const initialState: Expand<TREDUCER> = {
  layout: [emptyPageLayoutBlock("0")],
  width: 999,
  gap: 5,
  padding: [5, 5],
  colsQty: 60,
  rowHeight: 20,
};

export function pageLayoutReducer(
  state = initialState,
  { type, payload }: { type: string; payload: TREDUCER },
) {
  switch (type) {
    case BUILDER_LABELS.UPDATE_PAGE_LAYOUT: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
}
