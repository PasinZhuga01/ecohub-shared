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
export declare const edit: z.ZodObject<{
    id: z.ZodNumber;
    component: z.ZodUnion<readonly [z.ZodLiteral<"count">, z.ZodLiteral<"price">]>;
    value: z.ZodNumber;
}, z.core.$strip>;
export declare const remove: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export type GetRequest = z.infer<typeof get>;
export type CreateRequest = z.infer<typeof create>;
export type EditRequest = z.infer<typeof edit>;
export type RemoveRequest = z.infer<typeof remove>;
