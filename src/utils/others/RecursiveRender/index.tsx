import { ReactNode } from "react";

type TRecursiveRender = {
  children: ReactNode;
  structure: [any, { [key: string]: unknown }][];
};
/**
 * RecursiveRender
 * @description [[A, {a: 1}], [B, {}]] => <A a={1}><B>{children}</B></A>
 * @return ReactNode
 */
export function RecursiveRender({ children, structure }: TRecursiveRender) {
  let i;
  let recursiveResult = <>{children}</>;

  for (i = structure.length - 1; i >= 0; i -= 1) {
    const CurrentComponent = structure[i][0];
    const currentProps = structure[i][1];
    recursiveResult = (
      <CurrentComponent {...currentProps}>{recursiveResult}</CurrentComponent>
    );
  }

  return recursiveResult;
}
