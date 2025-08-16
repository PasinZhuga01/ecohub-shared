import { SuccessResponse } from './common.schemas';

export type AuthResponse = { token: string };
export type GetResponse = { login: string };
export type LogoutResponse = SuccessResponse;
