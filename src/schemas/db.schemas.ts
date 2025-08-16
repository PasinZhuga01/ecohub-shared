import { z } from 'zod';

/* utils objects */

export const identifiedObject = z.object({ id: z.number().int().min(1) });

/* database models */

export const user = identifiedObject.extend({
	login: z.string().min(1).max(80),
	password: z.string().min(1).max(255)
});

export const project = identifiedObject.extend({
	user_id: identifiedObject.shape.id,
	name: z.string().min(1).max(80),
	interacted_at: z.date()
});

export const currency = identifiedObject.extend({
	project_id: identifiedObject.shape.id,
	icon_src: z.string().min(1).max(255),
	name: z.string().min(1).max(80),
	rate: z.number().int().min(1)
});

export const market = identifiedObject.extend({
	project_id: identifiedObject.shape.id,
	name: z.string().min(1).max(80),
	interacted_at: z.date()
});

export const catalogItem = identifiedObject.extend({
	market_id: identifiedObject.shape.id,
	name: z.string().min(1).max(80),
	count: z.number().int().min(1),
	price: z.number().int().min(1)
});

export const cartItem = identifiedObject.extend({
	market_id: identifiedObject.shape.id,
	catalog_item_id: identifiedObject.shape.id,
	count: z.number().int().min(1)
});
