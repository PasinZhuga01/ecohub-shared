import { z } from 'zod';

// common schemas

export const identifiedObjectSchema = z.object({
	id: z.number().int().min(1)
});

export const interactedAtAwareObjectSchema = z.object({
	interactedAt: z.date()
});

// entities schemas

export const userSchema = identifiedObjectSchema.extend({
	login: z.string().min(1).max(80),
	password: z.string().min(1).max(255)
});

// types

export type IdentifiedObject = z.input<typeof identifiedObjectSchema>;
export type InteractedAtAwareObject = z.input<typeof interactedAtAwareObjectSchema>;

export type UserObject = z.input<typeof userSchema>;
