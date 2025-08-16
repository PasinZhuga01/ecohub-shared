import { z } from 'zod';
export declare const get: z.ZodUnion<readonly [z.ZodObject<{
    isForNav: z.ZodLiteral<true>;
    maxCount: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    isForNav: z.ZodLiteral<false>;
}, z.core.$strip>]>;
export declare const create: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const rename: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
}, z.core.$strip>;
export declare const remove: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RenameRequest = z.input<typeof rename>;
export type RemoveRequest = z.input<typeof remove>;
