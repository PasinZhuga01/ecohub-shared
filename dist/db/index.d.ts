import { z } from 'zod';
export declare const identifiedObjectSchema: z.ZodObject<{
    id: z.ZodNumber;
}, z.core.$strip>;
export declare const interactedAtAwareObjectSchema: z.ZodObject<{
    interactedAt: z.ZodDate;
}, z.core.$strip>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodNumber;
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type IdentifiedObject = z.input<typeof identifiedObjectSchema>;
export type InteractedAtAwareObject = z.input<typeof interactedAtAwareObjectSchema>;
export type UserObject = z.input<typeof userSchema>;
