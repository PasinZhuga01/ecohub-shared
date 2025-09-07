import { z } from 'zod';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { market, catalogItem, cartItem } from '../../../db.schemas';

export type BasePath = '/projects/markets/carts_items';

export const api = {
	basePath: '/projects/markets/carts_items',
	endpoints: {
		'/get': {
			method: 'GET',
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
			request: z.object({
				id: cartItem.shape.id
			}),
			response: successObject
		},
		'/clear': {
			method: 'DELETE',
			request: z.object({
				marketId: market.shape.id
			}),
			response: successObject
		}
	}
} satisfies Api<BasePath>;
