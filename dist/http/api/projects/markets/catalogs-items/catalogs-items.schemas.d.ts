import { z } from 'zod';
export declare const catalogsItemsApi: {
    readonly basePath: "/projects/markets/catalogs_items";
    readonly endpoints: {
        readonly '/get': {
            readonly method: "GET";
            readonly rawRequest: z.ZodPipe<z.ZodObject<{
                marketId: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                marketId: number;
            }, {
                marketId: string;
            }>>;
            readonly request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>>;
        };
        readonly '/create': {
            readonly method: "POST";
            readonly request: z.ZodObject<{
                marketId: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                count: z.ZodNumber;
                price: z.ZodNumber;
            }, z.core.$strip>;
        };
        readonly '/edit': {
            readonly method: "PATCH";
            readonly request: z.ZodUnion<readonly [z.ZodObject<{
                id: z.ZodNumber;
                component: z.ZodLiteral<"count">;
                value: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                id: z.ZodNumber;
                component: z.ZodLiteral<"price">;
                value: z.ZodNumber;
            }, z.core.$strip>]>;
            readonly response: z.ZodObject<{
                value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber]>;
            }, z.core.$strip>;
        };
        readonly '/remove': {
            readonly method: "DELETE";
            readonly rawRequest: z.ZodPipe<z.ZodObject<{
                id: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                id: number;
            }, {
                id: string;
            }>>;
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
