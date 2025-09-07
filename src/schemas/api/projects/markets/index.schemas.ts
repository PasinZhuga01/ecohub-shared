import { z } from 'zod';

import { BasePath as CatalogsItemsBasePath } from './catalogs-items.schemas';
import { BasePath as CartsItemsBasePath } from './carts-items.schemas';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { project, market } from '../../../db.schemas';

export type BasePath = '/projects/markets';

export const api = {
	basePath: '/projects/markets',
	subPaths: ['/projects/markets/catalogs_items', '/projects/markets/carts_items'],
	endpoints: {
		'/get_list': {
			method: 'GET',
			request: z.object({
				projectId: project.shape.id
			}),
			response: z.array(
				z.object({
					id: market.shape.id,
					name: market.shape.name,
					interactedAt: market.shape.interacted_at
				})
			)
		},
		'/get': {
			method: 'GET',
			request: z.object({
				id: market.shape.id
			}),
			response: z.object({
				name: market.shape.name
			})
		},
		'/create': {
			method: 'POST',
			request: z.object({
				projectId: project.shape.id,
				name: market.shape.name
			}),
			response: z.object({
				id: market.shape.id,
				name: market.shape.name,
				interactedAt: market.shape.interacted_at
			})
		},
		'/rename': {
			method: 'PATCH',
			request: z.object({
				id: market.shape.id,
				name: market.shape.name
			}),
			response: z.object({
				name: market.shape.name
			})
		},
		'/remove': {
			method: 'DELETE',
			request: z.object({
				id: market.shape.id
			}),
			response: successObject
		}
	}
} satisfies Api<BasePath, [CatalogsItemsBasePath, CartsItemsBasePath]>;
