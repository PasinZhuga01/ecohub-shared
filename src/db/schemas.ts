import { z } from 'zod';

export const identifiedObjectSchema = z.object({
	id: z.number().int().min(1)
});

export const userSchema = identifiedObjectSchema.extend({
	login: z.string().min(1).max(80),
	password: z.string().min(1).max(255)
});

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
