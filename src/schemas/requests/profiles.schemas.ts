import { z } from 'zod';

export const auth = z.object({
	isRegister: z.boolean(),
	login: z.string().min(1).max(80),
	password: z.string().min(1).max(255)
});

export type AuthRequest = z.infer<typeof auth>;
