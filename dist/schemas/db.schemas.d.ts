import { z } from 'zod';
export declare const identifiedObject: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const user: z.ZodObject<{
    id: z.ZodNumber;
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const project: z.ZodObject<{
    id: z.ZodNumber;
    user_id: z.ZodNumber;
    name: z.ZodString;
    interacted_at: z.ZodDate;
}, z.core.$strip>;
export declare const currency: z.ZodObject<{
    id: z.ZodNumber;
    project_id: z.ZodNumber;
    icon_src: z.ZodString;
    name: z.ZodString;
    rate: z.ZodNumber;
}, z.core.$strip>;
export declare const market: z.ZodObject<{
    id: z.ZodNumber;
    project_id: z.ZodNumber;
    name: z.ZodString;
    interacted_at: z.ZodDate;
}, z.core.$strip>;
export declare const catalogItem: z.ZodObject<{
    id: z.ZodNumber;
    market_id: z.ZodNumber;
    name: z.ZodString;
    count: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export declare const cartItem: z.ZodObject<{
    id: z.ZodNumber;
    market_id: z.ZodNumber;
    catalog_item_id: z.ZodNumber;
    count: z.ZodNumber;
}, z.core.$strip>;
