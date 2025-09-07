import { z } from 'zod';
export type BasePath = '/projects';
export declare const api: {
    basePath: "/projects";
    subPaths: ["/projects/currencies", "/projects/markets"];
    endpoints: {
        '/get_nav': {
            method: "GET";
            request: z.ZodObject<{
                maxCount: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                markets: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        };
        '/get_page': {
            method: "GET";
            request: z.ZodObject<{}, z.core.$strict>;
            response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodDate;
            }, z.core.$strip>>;
        };
        '/get': {
            method: "GET";
            request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        };
        '/create': {
            method: "POST";
            request: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
            response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodDate;
            }, z.core.$strip>;
        };
        '/rename': {
            method: "PATCH";
            request: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            response: z.ZodObject<{
                name: z.ZodString;
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
    };
};
