import { SuccessResponse } from '../../common.schemas';
export type GetResponse = {
    id: number;
    iconSrc: string;
    name: string;
    rate: number;
}[];
export type CreateResponse = {
    id: number;
    iconSrc: string;
    name: string;
    rate: number;
};
export type RerateResponse = {
    rate: number;
};
export type RemoveResponse = SuccessResponse;
export type ShiftResponse = SuccessResponse;
