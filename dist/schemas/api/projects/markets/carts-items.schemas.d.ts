import { z } from 'zod';
export type BasePath = '/projects/markets/carts_items';
export declare const api: {
    basePath: "/projects/markets/carts_items";
    endpoints: {
        '/get': {
            method: "GET";
            request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                catalogItemId: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>>;
        };
        '/add': {
            method: "POST";
            request: z.ZodObject<{
                marketId: z.ZodNumber;
                catalogItemId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                id: z.ZodNumber;
                catalogItemId: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>;
        };
        '/recount': {
            method: "PATCH";
            request: z.ZodObject<{
                id: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                count: z.ZodNumber;
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
        '/clear': {
            method: "DELETE";
            request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
