import { TUserRef } from "../../modelRef/user";
import { TTokenRef } from "../../modelRef/token";

export type RegisterResponse = {
  user: TUserRef;
  tokens: TTokenRef;
};

export type LoginResponse = {
  user: TUserRef;
  tokens: TTokenRef;
};

export type RefreshTokenResponse = TTokenRef;
