import { z } from 'zod';

import { BasePath as CurrenciesBasePath } from './currencies.schemas';
import { BasePath as MarketBasePath } from './markets/index.schemas';

import { Api } from '../types';
import { emptyObject, successObject } from '../common.schemas';
import { project, market } from '../../db.schemas';

export type BasePath = '/projects';

export const api = {
	basePath: '/projects',
	subPaths: ['/projects/currencies', '/projects/markets'],
	endpoints: {
		'/get_nav': {
			method: 'GET',
			request: z.object({
				maxCount: z.number().int().min(1)
			}),
			response: z.array(
				z.object({
					id: project.shape.id,
					name: project.shape.name,
					markets: z.array(
						z.object({
							id: market.shape.id,
							name: market.shape.name
						})
					)
				})
			)
		},
		'/get_page': {
			method: 'GET',
			request: emptyObject,
			response: z.array(
				z.object({
					id: project.shape.id,
					name: project.shape.name,
					interactedAt: project.shape.interacted_at
				})
			)
		},
		'/get': {
			method: 'GET',
			request: z.object({
				id: project.shape.id
			}),
			response: z.object({
				name: project.shape.name
			})
		},
		'/create': {
			method: 'POST',
			request: z.object({
				name: project.shape.name
			}),
			response: z.object({
				id: project.shape.id,
				name: project.shape.name,
				interactedAt: project.shape.interacted_at
			})
		},
		'/rename': {
			method: 'PATCH',
			request: z.object({
				id: project.shape.id,
				name: project.shape.name
			}),
			response: z.object({
				name: project.shape.name
			})
		},
		'/remove': {
			method: 'DELETE',
			request: z.object({
				id: project.shape.id
			}),
			response: successObject
		}
	}
} satisfies Api<BasePath, [CurrenciesBasePath, MarketBasePath]>;
