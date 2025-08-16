import { z } from 'zod';
export declare const get: z.ZodObject<{
    projectId: z.ZodNumber;
}, z.core.$strip>;
export declare const create: z.ZodObject<{
    projectId: z.ZodNumber;
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
