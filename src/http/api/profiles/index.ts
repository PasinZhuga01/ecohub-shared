import { z } from 'zod';
import { userSchema } from '@db';
import { emptyObjectSchema, BaseApi } from '@http/api';

export type ProfilesApi = typeof profilesApi;

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
