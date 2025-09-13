import { z } from 'zod';
export declare const api: {
    readonly basePath: "/projects/markets";
    readonly endpoints: {
        readonly '/get_list': {
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
                interactedAt: z.ZodDate;
            }, z.core.$strip>>;
        };
        readonly '/get': {
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        };
        readonly '/create': {
            readonly request: z.ZodObject<{
                projectId: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                interactedAt: z.ZodDate;
            }, z.core.$strip>;
        };
        readonly '/rename': {
            readonly request: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>;
            readonly response: z.ZodObject<{
                name: z.ZodString;
            }, z.core.$strip>;
        };
        readonly '/remove': {
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
