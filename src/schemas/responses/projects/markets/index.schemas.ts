import { SuccessResponse } from '../../../common.schemas';

export type GetResponse = { id: number; name: string; interactedAt: string }[];
export type CreateResponse = { id: number; name: string; interactedAt: string };
export type RenameResponse = { name: string };
export type RemoveResponse = SuccessResponse;
