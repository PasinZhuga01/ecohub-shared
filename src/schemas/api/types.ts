import { z } from 'zod';

type BaseApi<K extends string = string> = {
	basePath: string;
	endpoints: {
		[route in K]: {
			stringifyRequest?: z.ZodPipe<z.ZodObject<z.ZodRawShape>, z.ZodTransform<object>>;
			request: z.ZodType;
			response: z.ZodType;
		};
	};
};

export type Api = BaseApi<`/${string}`>;

export type RelativeRoute<T extends BaseApi> = keyof T['endpoints'];
export type AbsoluteRoute<T extends BaseApi> = `${T['basePath']}${RelativeRoute<T> & string}`;

export type StringifyRequest<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['stringifyRequest']>;
export type Request<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['request']>;
export type Response<T extends BaseApi, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['response']>;
