import { z } from 'zod';

import { id } from '../../../common.schemas';

const name = z.string().min(1).max(80);

export const get = z.object({ projectId: id });
export const create = z.object({ projectId: id, name });
export const rename = z.object({ id, name });
export const remove = z.object({ id });

export type GetRequest = z.infer<typeof get>;
export type CreateRequest = z.infer<typeof create>;
export type RenameRequest = z.infer<typeof rename>;
export type RemoveRequest = z.infer<typeof remove>;
