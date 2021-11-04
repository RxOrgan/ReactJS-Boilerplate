import { JSSProperties } from "../../jss-properties";

export type TRepoRef = {
  name: string;
  globalStyle: JSSProperties;
  ownerId: string;
  memberIds: string[];
};
