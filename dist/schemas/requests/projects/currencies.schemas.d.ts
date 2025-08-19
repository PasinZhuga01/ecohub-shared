import { z } from 'zod';
export declare const get: z.ZodObject<{
    projectId: z.ZodNumber;
}, z.core.$strip>;
export declare const create: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodString;
    rate: z.ZodNumber;
}, z.core.$strip>;
export declare const rerate: z.ZodObject<{
    id: z.ZodNumber;
    rate: z.ZodNumber;
}, z.core.$strip>;
export declare const remove: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const shift: z.ZodObject<{
    projectId: z.ZodNumber;
    value: z.ZodNumber;
}, z.core.$strip>;
export type GetRequest = z.input<typeof get>;
export type CreateRequest = z.input<typeof create>;
export type RerateRequest = z.input<typeof rerate>;
export type RemoveRequest = z.input<typeof remove>;
export type ShiftRequest = z.input<typeof shift>;
