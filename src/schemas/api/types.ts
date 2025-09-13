import { z } from 'zod';

export type Api = {
	basePath: string;
	endpoints: {
		[route: string]: {
			method: Method;
			stringifyRequest?: z.ZodPipe<z.ZodObject<z.ZodRawShape>, z.ZodTransform<object>>;
			request: z.ZodType;
			response: z.ZodType;
		};
	};
};

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export type RelativeRoute<T extends Api> = keyof T['endpoints'];
export type AbsoluteRoute<T extends Api> = `${T['basePath']}${RelativeRoute<T> & string}`;

export type StringifyRequest<T extends Api, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['stringifyRequest']>;
export type Request<T extends Api, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['request']>;
export type Response<T extends Api, K extends RelativeRoute<T>> = z.input<T['endpoints'][K]['response']>;
