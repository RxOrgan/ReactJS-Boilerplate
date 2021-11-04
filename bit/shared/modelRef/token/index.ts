export type TTokenRef = {
  access: {
    token: string;
    expire: string;
  };
  refresh: {
    token: string;
    expire: string;
  };
};
