import { z } from 'zod';

import { market, catalogItem, cartItem } from '../../../db.schemas';

export const get = z.object({
	marketId: market.shape.id
});

export const add = z.object({
	marketId: market.shape.id,
	catalogItemId: catalogItem.shape.id
});

export const recount = z.object({
	id: cartItem.shape.id,
	count: cartItem.shape.count
});

export const remove = z.object({
	id: cartItem.shape.id
});

export const clear = z.object({
	marketId: market.shape.id
});

export type GetRequest = z.input<typeof get>;
export type AddRequest = z.input<typeof add>;
export type RecountRequest = z.input<typeof recount>;
export type RemoveRequest = z.input<typeof remove>;
export type ClearRequest = z.input<typeof clear>;
