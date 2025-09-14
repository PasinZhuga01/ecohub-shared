import { z } from 'zod';
export declare const interactedAtSchema: z.ZodString;
export declare const emptyObject: z.ZodObject<{}, z.core.$strict>;
export declare const successObject: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, z.core.$strip>;
