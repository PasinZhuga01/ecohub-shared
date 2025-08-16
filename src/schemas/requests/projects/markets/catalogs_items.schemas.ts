import { z } from 'zod';

import { market, catalogItem } from '../../../db.schemas';

export const get = z.object({
	marketId: market.shape.id
});

export const create = z.object({
	marketId: market.shape.id,
	name: catalogItem.shape.name,
	count: catalogItem.shape.count,
	price: catalogItem.shape.price
});

export const edit = z.union([
	z.object({
		id: catalogItem.shape.id,
		component: z.literal('count'),
		value: catalogItem.shape.count
	}),
	z.object({
		id: catalogItem.shape.id,
		component: z.literal('price'),
		value: catalogItem.shape.price
	})
]);

export const remove = z.object({
	id: catalogItem.shape.id
});

export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type EditRequest = z.input<typeof edit>;
export type RemoveRequest = z.input<typeof remove>;
