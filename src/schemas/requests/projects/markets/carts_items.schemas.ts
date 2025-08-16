import { z } from 'zod';

import { id } from '../../../common.schemas';

export const get = z.object({ marketId: id });
export const add = z.object({ marketId: id, catalogItemId: id });
export const recount = z.object({
	id,
	count: z.number().int().min(1)
});
export const remove = z.object({ id });
export const clear = z.object({ marketId: id });

export type GetRequest = z.input<typeof get>;
export type AddRequest = z.input<typeof add>;
export type RecountRequest = z.input<typeof recount>;
export type RemoveRequest = z.input<typeof remove>;
export type ClearRequest = z.input<typeof clear>;
