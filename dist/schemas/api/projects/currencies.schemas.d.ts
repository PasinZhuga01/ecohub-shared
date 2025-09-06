import { z } from 'zod';
export type BasePath = '/projects/currencies';
export declare const api: {
    basePath: "/projects/currencies";
    endpoints: {
        '/get': {
            request: z.ZodObject<{
                projectId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                iconSrc: z.ZodString;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>>;
        };
        '/create': {
            request: z.ZodObject<{
                projectId: z.ZodNumber;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                id: z.ZodNumber;
                iconSrc: z.ZodString;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>;
        };
        '/rerate': {
            request: z.ZodObject<{
                id: z.ZodNumber;
                rate: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                rate: z.ZodNumber;
            }, z.core.$strip>;
        };
        '/remove': {
            request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
        '/shift': {
            request: z.ZodObject<{
                projectId: z.ZodNumber;
                value: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
