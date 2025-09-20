import { z } from 'zod';

import {
	identifiedObjectSchema,
	userSchema,
	projectSchema,
	currencySchema,
	marketSchema,
	catalogItemSchema,
	cartItemSchema
} from './schemas';

export type IdentifiedObject = z.input<typeof identifiedObjectSchema>;

export type UserObject = z.input<typeof userSchema>;
export type ProjectObject = z.input<typeof projectSchema>;
export type CurrencyObject = z.input<typeof currencySchema>;
export type MarketObject = z.input<typeof marketSchema>;
export type CatalogItemObject = z.input<typeof catalogItemSchema>;
export type CartItemObject = z.input<typeof cartItemSchema>;
