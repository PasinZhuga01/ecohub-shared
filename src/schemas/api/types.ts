import { z } from 'zod';

export type BaseApi = {
	basePath: string;
	endpoints: {
		[route: string]: {
			method: Method;
			request: z.ZodType;
			response: z.ZodType;
		} & ({ rawRequest: z.ZodPipe<z.ZodObject<z.ZodRawShape>, z.ZodTransform<object>> } | {});
	};
};

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type RelativeRoute<T extends BaseApi> = keyof T['endpoints'];
export type AbsoluteRoute<T extends BaseApi, K extends keyof T['endpoints'] = keyof T['endpoints']> = `${T['basePath']}${K & string}`;

export type Request<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['request']>;
export type Response<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['response']>;

export type RawRequest<T extends BaseApi, K extends RelativeRoute<T>> = T['endpoints'][K] extends { rawRequest: infer R }
	? z.input<R>
	: null;
