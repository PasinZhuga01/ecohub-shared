import { z } from 'zod';
export declare const api: {
    readonly basePath: "/projects/markets/carts_items";
    readonly endpoints: {
        readonly '/get': {
            readonly method: "GET";
            readonly stringifyRequest: z.ZodPipe<z.ZodObject<{
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
                catalogItemId: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>>;
        };
        readonly '/add': {
            readonly method: "POST";
            readonly request: z.ZodObject<{
                marketId: z.ZodNumber;
                catalogItemId: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                catalogItemId: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>;
        };
        readonly '/recount': {
            readonly method: "PATCH";
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
                count: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                count: z.ZodNumber;
            }, z.core.$strip>;
        };
        readonly '/remove': {
            readonly method: "DELETE";
            readonly stringifyRequest: z.ZodPipe<z.ZodObject<{
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
        readonly '/clear': {
            readonly method: "DELETE";
            readonly stringifyRequest: z.ZodPipe<z.ZodObject<{
                marketId: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                marketId: number;
            }, {
                marketId: string;
            }>>;
            readonly request: z.ZodObject<{
                marketId: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
