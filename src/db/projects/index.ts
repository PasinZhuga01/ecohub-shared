import { z } from 'zod';

import { identifiedObjectSchema, interactedAtAwareObjectSchema, userSchema } from '..';

export const projectSchema = identifiedObjectSchema.extend(interactedAtAwareObjectSchema.shape).extend({
	userId: userSchema.shape.id,
	name: z.string().min(1).max(80)
});

export const currencySchema = identifiedObjectSchema.extend({
	projectId: projectSchema.shape.id,
	iconSrc: z.string().min(1).max(255),
	name: z.string().min(1).max(80),
	rate: z.number().int().min(1)
});

export type ProjectObject = z.input<typeof projectSchema>;
export type CurrencyObject = z.input<typeof currencySchema>;
