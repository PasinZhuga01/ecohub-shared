import { z } from 'zod';
export type BasePath = '/projects/markets';
export declare const api: {
    basePath: "/projects/markets";
    subPaths: ["/projects/markets/catalogs_items", "/projects/markets/carts_items"];
    endpoints: {
        '/get_list': {
            method: "GET";
            request: z.ZodObject<{
                projectId: z.ZodNumber;
            }, z.core.$strip>;
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
                projectId: z.ZodNumber;
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
