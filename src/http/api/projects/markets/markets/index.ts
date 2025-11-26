import { z } from 'zod';
import { currencySchema, projectSchema } from '@db/projects';
import { marketSchema } from '@db/projects/markets';
import { interactedAtSchema, successObjectSchema, BaseApi } from '@http/api';

export type MarketsApi = typeof marketsApi;

export const marketsApi = {
	basePath: '/projects/markets',
	endpoints: {
		'/get_list': {
			method: 'GET',
			rawRequest: z
				.object({
					projectId: z.string()
				})
				.transform(({ projectId }) => ({ projectId: Number(projectId) })),
			request: z.object({
				projectId: projectSchema.shape.id
			}),
			response: z.array(
				z.object({
					id: marketSchema.shape.id,
					name: marketSchema.shape.name,
					interactedAt: interactedAtSchema
				})
			)
		},
		'/get': {
			method: 'GET',
			rawRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: marketSchema.shape.id
			}),
			response: z.object({
				name: marketSchema.shape.name
			})
		},
		'/create': {
			method: 'POST',
			request: z.object({
				projectId: projectSchema.shape.id,
				name: marketSchema.shape.name
			}),
			response: z.object({
				id: marketSchema.shape.id,
				name: marketSchema.shape.name,
				interactedAt: interactedAtSchema
			})
		},
		'/set_currency': {
			method: 'PATCH',
			request: z.object({
				marketId: marketSchema.shape.id,
				currencyId: currencySchema.shape.id
			}),
			response: successObjectSchema
		},
		'/rename': {
			method: 'PATCH',
			request: z.object({
				id: marketSchema.shape.id,
				name: marketSchema.shape.name
			}),
			response: z.object({
				name: marketSchema.shape.name
			})
		},
		'/remove': {
			method: 'DELETE',
			rawRequest: z
				.object({
					id: z.string()
				})
				.transform(({ id }) => ({ id: Number(id) })),
			request: z.object({
				id: marketSchema.shape.id
			}),
			response: successObjectSchema
		}
	}
} as const satisfies BaseApi;
