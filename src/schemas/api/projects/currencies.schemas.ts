import { z } from 'zod';

import { BaseApi } from '../types';
import { successObject } from '../common.schemas';
import { project, currency } from '../../db.schemas';

export type Api = typeof api;

export const api = {
	basePath: '/projects/currencies',
	endpoints: {
		'/get': {
			method: 'GET',
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
					id: currency.shape.id,
					iconSrc: currency.shape.icon_src,
					name: currency.shape.name,
					rate: currency.shape.rate
				})
			)
		},
		'/create': {
			method: 'POST',
			stringifyRequest: z
				.object({
					projectId: z.string(),
					name: z.string(),
					rate: z.string()
				})
				.transform(({ projectId, rate, ...object }) => ({ ...object, projectId: Number(projectId), rate: Number(rate) })),
			request: z.object({
				projectId: project.shape.id,
				name: currency.shape.name,
				rate: currency.shape.rate
			}),
			response: z.object({
				id: currency.shape.id,
				iconSrc: currency.shape.icon_src,
				name: currency.shape.name,
				rate: currency.shape.rate
			})
		},
		'/rerate': {
			method: 'PATCH',
			request: z.object({
				id: currency.shape.id,
				rate: currency.shape.rate
			}),
			response: z.object({
				rate: currency.shape.rate
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
				id: currency.shape.id
			}),
			response: successObject
		},
		'/shift': {
			method: 'PATCH',
			request: z.object({
				projectId: project.shape.id,
				value: currency.shape.rate
			}),
			response: successObject
		}
	}
} as const satisfies BaseApi;
