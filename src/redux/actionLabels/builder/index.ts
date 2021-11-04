// utils
import { makeReduxLabel } from "@/helpers";

const makeLabel = makeReduxLabel("Builder");

export const BUILDER_LABELS = {
  UPDATE_PAGE_LAYOUT: makeLabel("UPDATE_PAGE_LAYOUT"),
};
