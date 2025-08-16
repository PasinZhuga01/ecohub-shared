import { SuccessResponse } from '../../common.schemas';

export type GetResponse = { id: number; name: string; count: number; price: number }[];
export type CreateResponse = { id: number; name: string; count: number; price: number };
export type EditResponse = { value: number };
export type RemoveResponse = SuccessResponse;
