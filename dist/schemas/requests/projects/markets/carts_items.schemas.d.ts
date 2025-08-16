import { z } from 'zod';
export declare const get: z.ZodObject<{
    marketId: z.ZodNumber;
}, z.core.$strip>;
export declare const add: z.ZodObject<{
    marketId: z.ZodNumber;
    catalogItemId: z.ZodNumber;
}, z.core.$strip>;
export declare const recount: z.ZodObject<{
    id: z.ZodNumber;
    count: z.ZodNumber;
}, z.core.$strip>;
export declare const remove: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const clear: z.ZodObject<{
    marketId: z.ZodNumber;
}, z.core.$strip>;
export type GetRequest = z.infer<typeof get>;
export type AddRequest = z.infer<typeof add>;
export type RecountRequest = z.infer<typeof recount>;
export type RemoveRequest = z.infer<typeof remove>;
export type ClearRequest = z.infer<typeof clear>;
