import { CommonError, CommonState } from '../../types';
import { CustomizationAction } from './actions';
import {
    CUSTOMIZATION_DATA,
    CUSTOMIZATION_ERROR,
    CUSTOMIZATION_FETCH,
} from './constants';
import { CustomizationDataInterface } from './types';

export interface CustomizationState extends CommonState {
    data?: CustomizationDataInterface;
    loading: boolean;
    success: boolean;
    error?: CommonError;
}

export const initialCustomizationState: CustomizationState = {
    loading: false,
    success: false,
};

export const customizationReducer = (state = initialCustomizationState, action: CustomizationAction) => {
    switch (action.type) {
        case CUSTOMIZATION_FETCH:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case CUSTOMIZATION_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload,
                success: true,
            };
        case CUSTOMIZATION_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error,
            };
        default:
            return state;
    }
};
