// libs
import { useSelector } from "react-redux";
// types
import { TSelector } from "@/types/redux";
import { TPageReducer, TRootReducer } from "@/configs/redux";

const useTypedSelector: TSelector = useSelector;

type ReturnType<
  TPageName extends TPageReducer,
  TReducerName extends keyof TRootReducer[TPageName],
> = TRootReducer[TPageName][TReducerName];
type TEqualityFn<
  TPageName extends TPageReducer,
  TReducerName extends keyof TRootReducer[TPageName],
> = (
  left: ReturnType<TPageName, TReducerName>,
  right: ReturnType<TPageName, TReducerName>
) => boolean;

/**
 * useStore
 * @description Extract reducer states and add shallow compare
 * @param pageName
 * @param reducerName
 * @param equalityFn
 */
export const useStore = <
  TPageName extends TPageReducer,
  TReducerName extends keyof TRootReducer[TPageName],
>(
    pageName: TPageName,
    reducerName: TReducerName,
    equalityFn?: TEqualityFn<TPageName, TReducerName>,
  ): ReturnType<TPageName, TReducerName> =>
    useTypedSelector(
      (state) => (state[pageName] as TRootReducer[TPageName])[reducerName],
      // Default using shallow compare for reducing re-render
      equalityFn || ((prev, next) => prev === next),
    );
