import { z } from 'zod';
type BaseApi<K extends string = string, B extends RoutePath = RoutePath, S extends RoutePath[] = []> = {
    basePath: B;
    endpoints: {
        [route in K]: {
            method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
            request: z.ZodTypeAny;
            response: z.ZodTypeAny;
        };
    };
} & (S['length'] extends 0 ? {} : {
    subPaths: S;
});
export type Api<B extends RoutePath, S extends RoutePath[] = []> = BaseApi<RoutePath, B, S>;
export type RoutePath = `/${string}`;
export type RelativeRoute<T extends BaseApi> = keyof T['endpoints'];
export type AbsoluteRoute<T extends BaseApi> = `${T['basePath']}${RelativeRoute<T> & string}`;
export type Request<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['request']>;
export type Response<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['response']>;
export {};
