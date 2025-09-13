import { z } from 'zod';
export declare const api: {
    readonly basePath: "/profiles";
    readonly endpoints: {
        readonly '/auth': {
            readonly request: z.ZodObject<{
                isRegister: z.ZodBoolean;
                login: z.ZodString;
                password: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                token: z.ZodString;
            }, z.core.$strip>;
        };
        readonly '/get': {
            readonly request: z.ZodObject<{}, z.core.$strict>;
            readonly response: z.ZodObject<{
                login: z.ZodString;
            }, z.core.$strip>;
        };
    };
};
