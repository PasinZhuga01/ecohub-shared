import { z } from 'zod';

import { Api } from '../types';
import { successObject } from '../common.schemas';
import { project, currency } from '../../db.schemas';

export type BasePath = '/projects/currencies';

export const api = {
	basePath: '/projects/currencies',
	endpoints: {
		'/get': {
			method: 'GET',
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
} satisfies Api<BasePath>;
