import { codes } from './codes';
interface BaseErrorPayload<T extends Code> {
    code: T;
}
interface FormatErrorPayload extends BaseErrorPayload<'INVALID_FORMAT'> {
    details: {
        targets: {
            path: string[];
            message: string;
        }[];
    };
}
interface ResourceErrorPayload extends BaseErrorPayload<'NAME_TAKEN' | 'NOT_FOUND'> {
    details: {
        resource: Resource;
    };
}
interface RelationsErrorPayload extends BaseErrorPayload<'INVALID_RELATIONS'> {
    details: {
        parent: Resource;
        child: Resource;
    };
}
type EmptyErrorPayload = BaseErrorPayload<'INVALID_SESSION' | 'ACCESS_DENIED' | 'INVALID_CREDENTIALS' | 'LOGIN_TAKEN'>;
export type Codes = typeof codes;
export type Code = keyof Codes;
export type Resource = 'profile' | 'project' | 'currency' | 'market' | 'catalog_item' | 'cart_item';
export type ErrorPayload = EmptyErrorPayload | FormatErrorPayload | ResourceErrorPayload | RelationsErrorPayload;
export type ErrorResponse = {
    status: Codes[Code];
} & ErrorPayload;
export {};
