import { z } from 'zod';
import { projectSchema, currencySchema } from '@db/projects';
import { successObjectSchema, BaseApi } from '@http/api';

export type CurrenciesApi = typeof currenciesApi;

export const currenciesApi = {
	basePath: '/projects/currencies',
	endpoints: {
		'/get': {
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
					id: currencySchema.shape.id,
					iconSrc: currencySchema.shape.icon_src,
					name: currencySchema.shape.name,
					rate: currencySchema.shape.rate
				})
			)
		},
		'/create': {
			method: 'POST',
			rawRequest: z
				.object({
					projectId: z.string(),
					name: z.string(),
					rate: z.string()
				})
				.transform(({ projectId, rate, ...object }) => ({ ...object, projectId: Number(projectId), rate: Number(rate) })),
			request: z.object({
				projectId: projectSchema.shape.id,
				name: currencySchema.shape.name,
				rate: currencySchema.shape.rate
			}),
			response: z.object({
				id: currencySchema.shape.id,
				iconSrc: currencySchema.shape.icon_src,
				name: currencySchema.shape.name,
				rate: currencySchema.shape.rate
			})
		},
		'/rerate': {
			method: 'PATCH',
			request: z.object({
				id: currencySchema.shape.id,
				rate: currencySchema.shape.rate
			}),
			response: z.object({
				rate: currencySchema.shape.rate
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
				id: currencySchema.shape.id
			}),
			response: successObjectSchema
		},
		'/shift': {
			method: 'PATCH',
			request: z.object({
				projectId: projectSchema.shape.id,
				value: currencySchema.shape.rate
			}),
			response: successObjectSchema
		}
	}
} as const satisfies BaseApi;
