export const makeReduxLabel = (page: string) => (reduxLabel: string) =>
  `${page}-${reduxLabel}`;
