import { z } from 'zod';
export declare const projectSchema: z.ZodObject<{
    id: z.ZodNumber;
    user_id: z.ZodNumber;
    name: z.ZodString;
    interacted_at: z.ZodDate;
}, z.core.$strip>;
export declare const currencySchema: z.ZodObject<{
    id: z.ZodNumber;
    project_id: z.ZodNumber;
    icon_src: z.ZodString;
    name: z.ZodString;
    rate: z.ZodNumber;
}, z.core.$strip>;
export type ProjectObject = z.input<typeof projectSchema>;
export type CurrencyObject = z.input<typeof currencySchema>;
