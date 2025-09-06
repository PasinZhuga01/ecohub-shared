import { z } from 'zod';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { market, catalogItem } from '../../../db.schemas';

export type BasePath = '/projects/markets/catalogs_items';

export const api = {
	basePath: '/projects/markets/catalogs_items',
	endpoints: {
		'/get': {
			request: z.object({
				marketId: market.shape.id
			}),
			response: z.array(
				z.object({
					id: catalogItem.shape.id,
					name: catalogItem.shape.name,
					count: catalogItem.shape.count,
					price: catalogItem.shape.price
				})
			)
		},
		'/create': {
			request: z.object({
				marketId: market.shape.id,
				name: catalogItem.shape.name,
				count: catalogItem.shape.count,
				price: catalogItem.shape.price
			}),
			response: z.object({
				id: catalogItem.shape.id,
				name: catalogItem.shape.name,
				count: catalogItem.shape.count,
				price: catalogItem.shape.price
			})
		},
		'/edit': {
			request: z.union([
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
			]),
			response: z.object({
				value: z.union([catalogItem.shape.count, catalogItem.shape.price])
			})
		},
		'/remove': {
			request: z.object({
				id: catalogItem.shape.id
			}),
			response: successObject
		}
	}
} satisfies Api<BasePath>;
