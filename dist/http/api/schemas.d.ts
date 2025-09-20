import { z } from 'zod';
export declare const interactedAtSchema: z.ZodString;
export declare const emptyObjectSchema: z.ZodObject<{}, z.core.$strict>;
export declare const successObjectSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
