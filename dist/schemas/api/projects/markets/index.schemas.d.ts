import { z } from 'zod';
export type BasePath = '/projects/markets';
export declare const api: {
    basePath: "/projects/markets";
    subPaths: ["/projects/markets/catalogs_items", "/projects/markets/carts_items"];
    endpoints: {
        '/get_list': {
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
            request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        };
        '/create': {
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
            request: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            response: z.ZodObject<{
                name: z.ZodString;
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
    };
};
