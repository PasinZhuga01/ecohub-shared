import { z } from 'zod';

import { successObjectSchema } from '../../../schemas';
import { BaseApi } from '../../../types';
import { marketSchema, catalogItemSchema } from '../../../../../db';

export const catalogsItemsApi = {
	basePath: '/projects/markets/catalogs_items',
	endpoints: {
		'/get': {
			method: 'GET',
			rawRequest: z
				.object({
					marketId: z.string()
				})
				.transform(({ marketId }) => ({ marketId: Number(marketId) })),
			request: z.object({
				marketId: marketSchema.shape.id
			}),
			response: z.array(
				z.object({
					id: catalogItemSchema.shape.id,
					name: catalogItemSchema.shape.name,
					count: catalogItemSchema.shape.count,
					price: catalogItemSchema.shape.price
				})
			)
		},
		'/create': {
			method: 'POST',
			request: z.object({
				marketId: marketSchema.shape.id,
				name: catalogItemSchema.shape.name,
				count: catalogItemSchema.shape.count,
				price: catalogItemSchema.shape.price
			}),
			response: z.object({
				id: catalogItemSchema.shape.id,
				name: catalogItemSchema.shape.name,
				count: catalogItemSchema.shape.count,
				price: catalogItemSchema.shape.price
			})
		},
		'/edit': {
			method: 'PATCH',
			request: z.union([
				z.object({
					id: catalogItemSchema.shape.id,
					component: z.literal('count'),
					value: catalogItemSchema.shape.count
				}),
				z.object({
					id: catalogItemSchema.shape.id,
					component: z.literal('price'),
					value: catalogItemSchema.shape.price
				})
			]),
			response: z.object({
				value: z.union([catalogItemSchema.shape.count, catalogItemSchema.shape.price])
			})
		},
		'/remove': {
			method: 'DELETE',
			rawRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: catalogItemSchema.shape.id
			}),
			response: successObjectSchema
		}
	}
} as const satisfies BaseApi;
