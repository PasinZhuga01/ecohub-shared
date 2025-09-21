import { z } from 'zod';

import { identifiedObjectSchema } from '..';

export const projectSchema = identifiedObjectSchema.extend({
	user_id: identifiedObjectSchema.shape.id,
	name: z.string().min(1).max(80),
	interacted_at: z.date()
});

export const currencySchema = identifiedObjectSchema.extend({
	project_id: identifiedObjectSchema.shape.id,
	icon_src: z.string().min(1).max(255),
	name: z.string().min(1).max(80),
	rate: z.number().int().min(1)
});

export type ProjectObject = z.input<typeof projectSchema>;
export type CurrencyObject = z.input<typeof currencySchema>;
