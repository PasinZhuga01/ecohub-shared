import { z } from 'zod';

import { Api } from '../types';
import { emptyObject, successObject } from '../common.schemas';
import { project, market } from '../../db.schemas';

export const api = {
	basePath: '/projects',
	endpoints: {
		'/get_nav': {
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
			request: z.object({
				id: project.shape.id
			}),
			response: z.object({
				name: project.shape.name
			})
		},
		'/create': {
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
			request: z.object({
				id: project.shape.id,
				name: project.shape.name
			}),
			response: z.object({
				name: project.shape.name
			})
		},
		'/remove': {
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
} as const satisfies Api;
