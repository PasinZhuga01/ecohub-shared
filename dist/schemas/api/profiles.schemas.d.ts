import { z } from 'zod';
export type BasePath = '/profiles';
export declare const api: {
    basePath: "/profiles";
    endpoints: {
        '/auth': {
            method: "POST";
            request: z.ZodObject<{
                isRegister: z.ZodBoolean;
                login: z.ZodString;
                password: z.ZodString;
            }, z.core.$strip>;
            response: z.ZodObject<{
                token: z.ZodString;
            }, z.core.$strip>;
        };
        '/get': {
            method: "GET";
            request: z.ZodObject<{}, z.core.$strict>;
            response: z.ZodObject<{
                login: z.ZodString;
            }, z.core.$strip>;
        };
    };
};
