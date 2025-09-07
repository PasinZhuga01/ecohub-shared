import { z } from 'zod';

import { emptyObject } from './common.schemas';
import { Api } from './types';

import { user } from '../db.schemas';

export type BasePath = '/profiles';

export const api = {
	basePath: '/profiles',
	endpoints: {
		'/auth': {
			method: 'POST',
			request: z.object({
				isRegister: z.boolean(),
				login: user.shape.login,
				password: user.shape.password
			}),
			response: z.object({
				token: z.string()
			})
		},
		'/get': {
			method: 'GET',
			request: emptyObject,
			response: z.object({
				login: user.shape.login
			})
		}
	}
} satisfies Api<BasePath>;
