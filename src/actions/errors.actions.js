import {actionsTypes} from "../constants/actionsTypes";

export const errorActions = {
    setCriticalError,
    reset,
}

function setCriticalError(error) {
    return {
        type: actionsTypes.ERROR_SET_CRITICAL_ERROR,
        payload: { error }
    }
}

function reset() {
    return {
        type: actionsTypes.ERROR_RESET
    }
}
