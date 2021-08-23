import {actionsTypes} from "../constants/actionsTypes";

const initialState = {
    criticalError: false,
    error: undefined,
}

export const error = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ERROR_SET_CRITICAL_ERROR:
            return {
                ...state,
                criticalError:true,
                error: action.payload.error
            }
        case actionsTypes.ERROR_RESET:
            return {...initialState}
        default:
            return state;
    }
}
