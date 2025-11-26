import { z } from 'zod';
export declare const marketSchema: z.ZodObject<{
    id: z.ZodNumber;
    interactedAt: z.ZodDate;
    projectId: z.ZodNumber;
    currencyId: z.ZodNullable<z.ZodNumber>;
    name: z.ZodString;
}, z.core.$strip>;
export declare const catalogItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    marketId: z.ZodNumber;
    name: z.ZodString;
    count: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export declare const cartItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    marketId: z.ZodNumber;
    catalogItemId: z.ZodNumber;
    count: z.ZodNumber;
}, z.core.$strip>;
export type MarketObject = z.input<typeof marketSchema>;
export type CatalogItemObject = z.input<typeof catalogItemSchema>;
export type CartItemObject = z.input<typeof cartItemSchema>;
