import { z } from 'zod';

import { user } from '../db.schemas';

export const auth = z.object({
	isRegister: z.boolean(),
	login: user.shape.login,
	password: user.shape.password
});

export type AuthRequest = z.input<typeof auth>;
