// types
import { TRootReducer, TPageReducer } from "@/configs/redux";

export type TSelector = {
  <TSelected>(
    selector: (state: TRootReducer) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
};

export type TUseStore = <
  TPageName extends TPageReducer,
  TReducerName extends keyof TRootReducer[TPageName],
>(
  pageName: TPageName,
  reducerName: TReducerName
) => Readonly<TRootReducer[TPageName][TReducerName]>;
