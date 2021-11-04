// libs
import { Layout } from "react-grid-layout";
// others
import { BUILDER_LABELS } from "@/redux/actionLabels";

/**
 * updatePageLayout
 */
export function updatePageLayout(payload: { layout: Layout[] }) {
  return {
    type: BUILDER_LABELS.UPDATE_PAGE_LAYOUT,
    payload,
  };
}
