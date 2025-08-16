import { SuccessResponse } from '../../../common.schemas';

export type GetResponse = { id: number; catalogItemId: number; count: number }[];
export type AddResponse = { id: number; catalogItemId: number; count: number };
export type RecountResponse = { count: number };
export type RemoveResponse = SuccessResponse;
export type ClearResponse = SuccessResponse;
