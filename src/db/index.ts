import { z } from 'zod';

export const identifiedObjectSchema = z.object({
	id: z.number().int().min(1)
});

export const userSchema = identifiedObjectSchema.extend({
	login: z.string().min(1).max(80),
	password: z.string().min(1).max(255)
});

export type IdentifiedObject = z.input<typeof identifiedObjectSchema>;
export type UserObject = z.input<typeof userSchema>;
