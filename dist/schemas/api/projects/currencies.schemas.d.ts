import { z } from 'zod';
export type BasePath = '/projects/currencies';
export declare const api: {
    basePath: "/projects/currencies";
    endpoints: {
        '/get': {
            method: "GET";
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
            method: "POST";
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
            method: "PATCH";
            request: z.ZodObject<{
                id: z.ZodNumber;
                rate: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                rate: z.ZodNumber;
            }, z.core.$strip>;
        };
        '/remove': {
            method: "DELETE";
            request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
        '/shift': {
            method: "PATCH";
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
