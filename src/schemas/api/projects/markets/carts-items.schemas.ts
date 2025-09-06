import { z } from 'zod';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { market, catalogItem, cartItem } from '../../../db.schemas';

export type BasePath = '/projects/markets/carts_items';

export const api = {
	basePath: '/projects/markets/carts_items',
	endpoints: {
		'/get': {
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
			request: z.object({
				id: cartItem.shape.id,
				count: cartItem.shape.count
			}),
			response: z.object({
				count: cartItem.shape.count
			})
		},
		'/remove': {
			request: z.object({
				id: cartItem.shape.id
			}),
			response: successObject
		},
		'/clear': {
			request: z.object({
				marketId: market.shape.id
			}),
			response: successObject
		}
	}
} satisfies Api<BasePath>;
