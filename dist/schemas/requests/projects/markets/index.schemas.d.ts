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
export type GetRequest = z.infer<typeof get>;
export type CreateRequest = z.infer<typeof create>;
export type RenameRequest = z.infer<typeof rename>;
export type RemoveRequest = z.infer<typeof remove>;
