export interface ResponseBase<T> {
    isSuccess: boolean;
    error: Error;
    result: T;
}
export interface Error {
    message: string;
    errorCode: ErrorCodeEnum;
    uuid: string;
    errors: Error[];
}
export enum ErrorCodeEnum {
    UNKNOWN = 0,
    INVALID_REQUEST = 1,
    FORBIDDEN = 2,
}