import { z } from 'zod';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { market, catalogItem, cartItem } from '../../../db.schemas';

export const api = {
	basePath: '/projects/markets/carts_items',
	endpoints: {
		'/get': {
			method: 'GET',
			stringifyRequest: z
				.object({
					marketId: z.string()
				})
				.transform(({ marketId }) => ({ marketId: Number(marketId) })),
			request: z.object({
				marketId: market.shape.id
			}),
			response: z.array(
				z.object({
					id: cartItem.shape.id,
					catalogItemId: catalogItem.shape.id,
					count: cartItem.shape.count
				})
			)
		},
		'/add': {
			method: 'POST',
			request: z.object({
				marketId: market.shape.id,
				catalogItemId: catalogItem.shape.id
			}),
			response: z.object({
				id: cartItem.shape.id,
				catalogItemId: catalogItem.shape.id,
				count: cartItem.shape.count
			})
		},
		'/recount': {
			method: 'PATCH',
			request: z.object({
				id: cartItem.shape.id,
				count: cartItem.shape.count
			}),
			response: z.object({
				count: cartItem.shape.count
			})
		},
		'/remove': {
			method: 'DELETE',
			stringifyRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: cartItem.shape.id
			}),
			response: successObject
		},
		'/clear': {
			method: 'DELETE',
			stringifyRequest: z
				.object({
					marketId: z.string()
				})
				.transform(({ marketId }) => ({ marketId: Number(marketId) })),
			request: z.object({
				marketId: market.shape.id
			}),
			response: successObject
		}
	}
} as const satisfies Api;
