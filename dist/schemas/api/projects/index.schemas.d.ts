import { z } from 'zod';
export declare const api: {
    readonly basePath: "/projects";
    readonly endpoints: {
        readonly '/get_nav': {
            readonly method: "GET";
            readonly stringifyRequest: z.ZodPipe<z.ZodObject<{
                maxCount: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                maxCount: number;
            }, {
                maxCount: string;
            }>>;
            readonly request: z.ZodObject<{
                maxCount: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                markets: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        };
        readonly '/get_page': {
            readonly method: "GET";
            readonly request: z.ZodObject<{}, z.core.$strict>;
            readonly response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodDate;
            }, z.core.$strip>>;
        };
        readonly '/get': {
            readonly method: "GET";
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        };
        readonly '/create': {
            readonly method: "POST";
            readonly request: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodDate;
            }, z.core.$strip>;
        };
        readonly '/rename': {
            readonly method: "PATCH";
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                name: z.ZodString;
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
    };
};
