import { z } from 'zod';
export type BasePath = '/projects/markets/carts_items';
export declare const api: {
    basePath: "/projects/markets/carts_items";
    endpoints: {
        '/get': {
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
            request: z.ZodObject<{
                id: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                count: z.ZodNumber;
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
        '/clear': {
            request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
