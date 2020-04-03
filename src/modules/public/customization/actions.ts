import { CommonError } from '../../types';
import {
    CUSTOMIZATION_DATA,
    CUSTOMIZATION_ERROR,
    CUSTOMIZATION_FETCH,
} from './constants';
import { CustomizationDataInterface } from './types';

export interface CustomizationFetch {
    type: typeof CUSTOMIZATION_FETCH;
}

export interface CustomizationData {
    type: typeof CUSTOMIZATION_DATA;
    payload: CustomizationDataInterface;
}

export interface CustomizationError {
    type: typeof CUSTOMIZATION_ERROR;
    error: CommonError;
}

export type CustomizationAction =
    CustomizationFetch
    | CustomizationData
    | CustomizationError;

export const customizationFetch = (): CustomizationFetch => ({
    type: CUSTOMIZATION_FETCH,
});

export const customizationData = (payload: CustomizationData['payload']): CustomizationData => ({
    type: CUSTOMIZATION_DATA,
    payload,
});

export const customizationError = (error: CommonError): CustomizationError => ({
    type: CUSTOMIZATION_ERROR,
    error,
});
