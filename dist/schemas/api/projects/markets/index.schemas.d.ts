import { z } from 'zod';
export type Api = typeof api;
export declare const api: {
    readonly basePath: "/projects/markets";
    readonly endpoints: {
        readonly '/get_list': {
            readonly method: "GET";
            readonly stringifyRequest: z.ZodPipe<z.ZodObject<{
                projectId: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                projectId: number;
            }, {
                projectId: string;
            }>>;
            readonly request: z.ZodObject<{
                projectId: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodString;
            }, z.core.$strip>>;
        };
        readonly '/get': {
            readonly method: "GET";
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
                name: z.ZodString;
            }, z.core.$strip>;
        };
        readonly '/create': {
            readonly method: "POST";
            readonly request: z.ZodObject<{
                projectId: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodString;
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
