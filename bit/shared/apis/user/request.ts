export type CreateUserRequest = {
  email: string;
  password: string;
  name: string;
  role: string;
};

export type GetUsersRequest = {
  name?: string;
  role?: string;
  sortBy?: string;
  limit?: number;
  page?: number;
};

export type GetUserRequest = {
  userId: string;
};

export type UpdateUserRequest = {
  userId: string;
  email?: string;
  password?: string;
  name?: string;
};

export type DeleteUserRequest = {
  userId: string;
};
