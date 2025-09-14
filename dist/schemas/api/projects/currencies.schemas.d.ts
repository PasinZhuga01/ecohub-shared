import { z } from 'zod';
export type Api = typeof api;
export declare const api: {
    readonly basePath: "/projects/currencies";
    readonly endpoints: {
        readonly '/get': {
            readonly method: "GET";
            readonly rawRequest: z.ZodPipe<z.ZodObject<{
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
                iconSrc: z.ZodString;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>>;
        };
        readonly '/create': {
            readonly method: "POST";
            readonly rawRequest: z.ZodPipe<z.ZodObject<{
                projectId: z.ZodString;
                name: z.ZodString;
                rate: z.ZodString;
            }, z.core.$strip>, z.ZodTransform<{
                projectId: number;
                rate: number;
                name: string;
            }, {
                projectId: string;
                name: string;
                rate: string;
            }>>;
            readonly request: z.ZodObject<{
                projectId: z.ZodNumber;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                iconSrc: z.ZodString;
                name: z.ZodString;
                rate: z.ZodNumber;
            }, z.core.$strip>;
        };
        readonly '/rerate': {
            readonly method: "PATCH";
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
                rate: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                rate: z.ZodNumber;
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
        readonly '/shift': {
            readonly method: "PATCH";
            readonly request: z.ZodObject<{
                projectId: z.ZodNumber;
                value: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                success: z.ZodLiteral<true>;
            }, z.core.$strip>;
        };
    };
};
