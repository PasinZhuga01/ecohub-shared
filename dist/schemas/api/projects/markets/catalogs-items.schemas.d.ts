import { z } from 'zod';
export type BasePath = '/projects/markets/catalogs_items';
export declare const api: {
    basePath: "/projects/markets/catalogs_items";
    endpoints: {
        '/get': {
            request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>>;
        };
        '/create': {
            request: z.ZodObject<{
                marketId: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>;
            response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>;
        };
        '/edit': {
            request: z.ZodUnion<readonly [z.ZodObject<{
                id: z.ZodNumber;
                component: z.ZodLiteral<"count">;
                value: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodNumber;
                component: z.ZodLiteral<"price">;
                value: z.ZodNumber;
            }, z.core.$strip>]>;
            response: z.ZodObject<{
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber]>;
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
