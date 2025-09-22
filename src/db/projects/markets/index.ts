import { z } from 'zod';

import { identifiedObjectSchema, interactedAtAwareObjectSchema } from '../..';

export const marketSchema = identifiedObjectSchema.extend(interactedAtAwareObjectSchema.shape).extend({
	projectId: identifiedObjectSchema.shape.id,
	name: z.string().min(1).max(80)
});

export const catalogItemSchema = identifiedObjectSchema.extend({
	marketId: identifiedObjectSchema.shape.id,
	name: z.string().min(1).max(80),
	count: z.number().int().min(1),
	price: z.number().int().min(1)
});

export const cartItemSchema = identifiedObjectSchema.extend({
	marketId: identifiedObjectSchema.shape.id,
	catalogItemId: identifiedObjectSchema.shape.id,
	count: z.number().int().min(1)
});

export type MarketObject = z.input<typeof marketSchema>;
export type CatalogItemObject = z.input<typeof catalogItemSchema>;
export type CartItemObject = z.input<typeof cartItemSchema>;
