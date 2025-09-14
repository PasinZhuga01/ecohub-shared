import { z } from 'zod';

import { BaseApi } from '../types';
import { emptyObject, interactedAtSchema, successObject } from '../common.schemas';
import { project, market } from '../../db.schemas';

export type Api = typeof api;

export const api = {
	basePath: '/projects',
	endpoints: {
		'/get_nav': {
			method: 'GET',
			stringifyRequest: z
				.object({
					maxCount: z.string()
				})
				.transform(({ maxCount }) => ({ maxCount: Number(maxCount) })),
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
					interactedAt: interactedAtSchema
				})
			)
		},
		'/get': {
			method: 'GET',
			stringifyRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
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
				interactedAt: interactedAtSchema
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
			stringifyRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: project.shape.id
			}),
			response: successObject
		}
	}
} as const satisfies BaseApi;
