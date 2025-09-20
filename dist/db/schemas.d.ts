import { z } from 'zod';
export declare const identifiedObjectSchema: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const projectSchema: z.ZodObject<{
    id: z.ZodNumber;
    user_id: z.ZodNumber;
    name: z.ZodString;
    interacted_at: z.ZodDate;
}, z.core.$strip>;
export declare const currencySchema: z.ZodObject<{
    id: z.ZodNumber;
    project_id: z.ZodNumber;
    icon_src: z.ZodString;
    name: z.ZodString;
    rate: z.ZodNumber;
}, z.core.$strip>;
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
