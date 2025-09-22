import { z } from 'zod';
export declare const projectSchema: z.ZodObject<{
    id: z.ZodNumber;
    interactedAt: z.ZodDate;
    userId: z.ZodNumber;
    name: z.ZodString;
}, z.core.$strip>;
export declare const currencySchema: z.ZodObject<{
    id: z.ZodNumber;
    projectId: z.ZodNumber;
    iconSrc: z.ZodString;
    name: z.ZodString;
    rate: z.ZodNumber;
}, z.core.$strip>;
export type ProjectObject = z.input<typeof projectSchema>;
export type CurrencyObject = z.input<typeof currencySchema>;
