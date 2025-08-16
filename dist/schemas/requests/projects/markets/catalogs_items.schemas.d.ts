import { z } from 'zod';
export declare const get: z.ZodObject<{
    marketId: z.ZodNumber;
}, z.core.$strip>;
export declare const create: z.ZodObject<{
    marketId: z.ZodNumber;
    name: z.ZodString;
    count: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export declare const edit: z.ZodUnion<readonly [z.ZodObject<{
    id: z.ZodNumber;
    component: z.ZodLiteral<"count">;
    value: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    id: z.ZodNumber;
    component: z.ZodLiteral<"price">;
    value: z.ZodNumber;
}, z.core.$strip>]>;
export declare const remove: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type EditRequest = z.input<typeof edit>;
export type RemoveRequest = z.input<typeof remove>;
