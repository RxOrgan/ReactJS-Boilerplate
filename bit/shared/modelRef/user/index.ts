import { TRoleNames } from "../../roles";

export type TUserRef = {
  id: string;
  name: string;
  email: string;
  role: TRoleNames;
};
