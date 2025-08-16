import { z } from 'zod';

import { id } from '../../../common.schemas';

const name = z.string().min(1).max(80);
const amount = z.number().int().min(1);

export const get = z.object({ marketId: id });
export const create = z.object({ marketId: id, name, count: amount, price: amount });
export const edit = z.object({
	id,
	component: z.union([z.literal('count'), z.literal('price')]),
	value: amount
});
export const remove = z.object({ id });

export type GetRequest = z.infer<typeof get>;
export type CreateRequest = z.infer<typeof create>;
export type EditRequest = z.infer<typeof edit>;
export type RemoveRequest = z.infer<typeof remove>;
