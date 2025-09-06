import codes from './codes';

/* payloads interfaces */

interface BaseErrorPayload<T extends keyof typeof codes> {
	code: T;
}

interface FormatErrorPayload extends BaseErrorPayload<'INVALID_FORMAT'> {
	details: { targets: { path: string[]; message: string }[] };
}

interface ResourceErrorPayload extends BaseErrorPayload<'NAME_TAKEN' | 'NOT_FOUND'> {
	details: { resource: Resource };
}

interface RelationsErrorPayload extends BaseErrorPayload<'INVALID_RELATIONS'> {
	details: { parent: Resource; child: Resource };
}

type EmptyErrorPayload = BaseErrorPayload<'INVALID_SESSION' | 'ACCESS_DENIED' | 'INVALID_CREDENTIALS' | 'LOGIN_TAKEN'>;

/* payloads types */

export type Resource = 'profile' | 'project' | 'currency' | 'market' | 'catalog_item' | 'cart_item';

export type ErrorPayload = EmptyErrorPayload | FormatErrorPayload | ResourceErrorPayload | RelationsErrorPayload;
export type ErrorResponse = { status: (typeof codes)[keyof typeof codes] } & ErrorPayload;
