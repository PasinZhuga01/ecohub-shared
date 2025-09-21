import { z } from 'zod';
import { projectSchema } from '@db/projects';
import { marketSchema } from '@db/projects/markets';
import { emptyObjectSchema, interactedAtSchema, successObjectSchema, BaseApi } from '@http/api';

export type ProjectsApi = typeof projectsApi;

export const projectsApi = {
	basePath: '/projects',
	endpoints: {
		'/get_nav': {
			method: 'GET',
			rawRequest: z
				.object({
					maxCount: z.string()
				})
				.transform(({ maxCount }) => ({ maxCount: Number(maxCount) })),
			request: z.object({
				maxCount: z.number().int().min(1)
			}),
			response: z.array(
				z.object({
					id: projectSchema.shape.id,
					name: projectSchema.shape.name,
					markets: z.array(
						z.object({
							id: marketSchema.shape.id,
							name: marketSchema.shape.name
						})
					)
				})
			)
		},
		'/get_page': {
			method: 'GET',
			request: emptyObjectSchema,
			response: z.array(
				z.object({
					id: projectSchema.shape.id,
					name: projectSchema.shape.name,
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
				id: projectSchema.shape.id
			}),
			response: z.object({
				name: projectSchema.shape.name
			})
		},
		'/create': {
			method: 'POST',
			request: z.object({
				name: projectSchema.shape.name
			}),
			response: z.object({
				id: projectSchema.shape.id,
				name: projectSchema.shape.name,
				interactedAt: interactedAtSchema
			})
		},
		'/rename': {
			method: 'PATCH',
			request: z.object({
				id: projectSchema.shape.id,
				name: projectSchema.shape.name
			}),
			response: z.object({
				name: projectSchema.shape.name
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
				id: projectSchema.shape.id
			}),
			response: successObjectSchema
		}
	}
} as const satisfies BaseApi;
