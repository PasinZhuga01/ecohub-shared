import { z } from 'zod';

import { emptyObjectSchema } from '../schemas';
import { BaseApi } from '../types';
import { userSchema } from '../../../db';

export const profilesApi = {
	basePath: '/profiles',
	endpoints: {
		'/auth': {
			method: 'POST',
			request: z.object({
				isRegister: z.boolean(),
				login: userSchema.shape.login,
				password: userSchema.shape.password
			}),
			response: z.object({
				token: z.string()
			})
		},
		'/get': {
			method: 'GET',
			request: emptyObjectSchema,
			response: z.object({
				login: userSchema.shape.login
			})
		}
	}
} as const satisfies BaseApi;
