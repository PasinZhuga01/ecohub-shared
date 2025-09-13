import { z } from 'zod';

import { Api } from '../../types';
import { successObject } from '../../common.schemas';
import { project, market } from '../../../db.schemas';

export const api = {
	basePath: '/projects/markets',
	endpoints: {
		'/get_list': {
			stringifyRequest: z
				.object({
					projectId: z.string()
				})
				.transform(({ projectId }) => ({ projectId: Number(projectId) })),
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
			request: z.object({
				id: market.shape.id
			}),
			response: z.object({
				name: market.shape.name
			})
		},
		'/create': {
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
			request: z.object({
				id: market.shape.id,
				name: market.shape.name
			}),
			response: z.object({
				name: market.shape.name
			})
		},
		'/remove': {
			stringifyRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: market.shape.id
			}),
			response: successObject
		}
	}
} as const satisfies Api;
