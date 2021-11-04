import { JSSProperties } from "../../jss-properties";

export type CreateRepoRequest = {
  name: string;
};

export type GetReposRequest = {
  name?: string;
  role?: string;
  sortBy?: string;
  limit?: number;
  page?: number;
};

export type GetRepoRequest = {
  repoId: string;
};

export type UpdateRepoRequest = {
  repoId: string;
  globalStyle?: JSSProperties;
  name?: string;
};

export type DeleteRepoRequest = {
  repoId: string;
};
