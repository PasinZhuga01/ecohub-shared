import { z } from 'zod';
export declare const marketSchema: z.ZodObject<{
    id: z.ZodNumber;
    project_id: z.ZodNumber;
    name: z.ZodString;
    interacted_at: z.ZodDate;
}, z.core.$strip>;
export declare const catalogItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    market_id: z.ZodNumber;
    name: z.ZodString;
    count: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export declare const cartItemSchema: z.ZodObject<{
    id: z.ZodNumber;
    market_id: z.ZodNumber;
    catalog_item_id: z.ZodNumber;
    count: z.ZodNumber;
}, z.core.$strip>;
export type MarketObject = z.input<typeof marketSchema>;
export type CatalogItemObject = z.input<typeof catalogItemSchema>;
export type CartItemObject = z.input<typeof cartItemSchema>;
