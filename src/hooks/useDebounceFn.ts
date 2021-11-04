// libs
import { useCallback, useEffect, useRef } from "react";
// hooks
import { useUpdateEffect } from "./useUpdateEffect";

type PROPS = {
  fn: Function;
  deps?: Array<any>;
  wait?: number;
};
/**
 * useDebounceFn
 * @see https://github.com/umijs/hooks/blob/master/packages/hooks/src/useDebounceFn/index.ts
 * @param fn
 * @param deps
 * @param wait
 */
export const useDebounceFn = ({ fn, deps = [], wait = 500 }: PROPS) => {
  const timer = useRef<any>();

  const fnRef = useRef<Function>(fn);
  fnRef.current = fn;

  const cancel = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  const run = useCallback(
    (...args: any) => {
      cancel();
      timer.current = setTimeout(() => {
        fnRef.current(...args);
      }, wait);
    },
    [wait, cancel]
  );

  useUpdateEffect(() => {
    run();

    return cancel;
  }, [...deps, run]);

  useEffect(() => cancel, []);

  return {
    run,
    cancel,
  };
};
