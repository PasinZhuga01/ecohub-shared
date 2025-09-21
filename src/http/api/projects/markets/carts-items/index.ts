import { z } from 'zod';
import { marketSchema, catalogItemSchema, cartItemSchema } from '@db/projects/markets';
import { successObjectSchema, BaseApi } from '@http/api';

export type CartsItemsApi = typeof cartsItemsApi;

export const cartsItemsApi = {
	basePath: '/projects/markets/carts_items',
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
					id: cartItemSchema.shape.id,
					catalogItemId: catalogItemSchema.shape.id,
					count: cartItemSchema.shape.count
				})
			)
		},
		'/add': {
			method: 'POST',
			request: z.object({
				marketId: marketSchema.shape.id,
				catalogItemId: catalogItemSchema.shape.id
			}),
			response: z.object({
				id: cartItemSchema.shape.id,
				catalogItemId: catalogItemSchema.shape.id,
				count: cartItemSchema.shape.count
			})
		},
		'/recount': {
			method: 'PATCH',
			request: z.object({
				id: cartItemSchema.shape.id,
				count: cartItemSchema.shape.count
			}),
			response: z.object({
				count: cartItemSchema.shape.count
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
				id: cartItemSchema.shape.id
			}),
			response: successObjectSchema
		},
		'/clear': {
			method: 'DELETE',
			rawRequest: z
				.object({
					marketId: z.string()
				})
				.transform(({ marketId }) => ({ marketId: Number(marketId) })),
			request: z.object({
				marketId: marketSchema.shape.id
			}),
			response: successObjectSchema
		}
	}
} as const satisfies BaseApi;
