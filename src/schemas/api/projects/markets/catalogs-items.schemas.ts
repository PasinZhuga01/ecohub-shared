import { z } from 'zod';

import { BaseApi } from '../../types';
import { successObject } from '../../common.schemas';
import { market, catalogItem } from '../../../db.schemas';

export type Api = typeof api;

export const api = {
	basePath: '/projects/markets/catalogs_items',
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
					id: catalogItem.shape.id,
					name: catalogItem.shape.name,
					count: catalogItem.shape.count,
					price: catalogItem.shape.price
				})
			)
		},
		'/create': {
			method: 'POST',
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
			method: 'PATCH',
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
			method: 'DELETE',
			stringifyRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: catalogItem.shape.id
			}),
			response: successObject
		}
	}
} as const satisfies BaseApi;
