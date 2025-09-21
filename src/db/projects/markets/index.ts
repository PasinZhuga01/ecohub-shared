import { z } from 'zod';

import { identifiedObjectSchema } from '../..';

export const marketSchema = identifiedObjectSchema.extend({
	project_id: identifiedObjectSchema.shape.id,
	name: z.string().min(1).max(80),
	interacted_at: z.date()
});

export const catalogItemSchema = identifiedObjectSchema.extend({
	market_id: identifiedObjectSchema.shape.id,
	name: z.string().min(1).max(80),
	count: z.number().int().min(1),
	price: z.number().int().min(1)
});

export const cartItemSchema = identifiedObjectSchema.extend({
	market_id: identifiedObjectSchema.shape.id,
	catalog_item_id: identifiedObjectSchema.shape.id,
	count: z.number().int().min(1)
});

export type MarketObject = z.input<typeof marketSchema>;
export type CatalogItemObject = z.input<typeof catalogItemSchema>;
export type CartItemObject = z.input<typeof cartItemSchema>;
