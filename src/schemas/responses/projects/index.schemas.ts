import { SuccessResponse } from '../common.schemas';

export type GetResponse = { name: string };
export type GetNavResponse = { id: number; name: string; markets: { id: number; name: string }[] }[];
export type GetPageResponse = { id: number; name: string; interactedAt: string }[];
export type CreateResponse = { id: number; name: string; interactedAt: string };
export type RenameResponse = { name: string };
export type RemoveResponse = SuccessResponse;
