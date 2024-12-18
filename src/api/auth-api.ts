import { api } from "./api.ts";
import { IUser } from "../types/user.ts";

export interface Credentials {
  name?: string;
  email: string;
  password: string;
}

export interface CredentialsLogin {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  user?: IUser;
  message: string;
  statusCode?: number;
}

export interface SignupResponse {
  message: string;
  user: IUser;
  statusCode?: number;
}

export const loginApi = async (
  credentials: CredentialsLogin
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const signupApi = async (
  credentials: Credentials
): Promise<SignupResponse> => {
  const response = await api.post("/auth/register", credentials);
  return response.data;
};
