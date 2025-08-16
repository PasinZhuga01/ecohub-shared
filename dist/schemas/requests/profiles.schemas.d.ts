import { z } from 'zod';
export declare const auth: z.ZodObject<{
    isRegister: z.ZodBoolean;
    login: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type AuthRequest = z.input<typeof auth>;
