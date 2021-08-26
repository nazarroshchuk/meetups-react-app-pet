import { actionsTypes } from "../constants/actionsTypes";

const initialState = {
    toastMessageVisibility: false,
    notification: null,
}

export const notifications = (state= initialState, action) => {
    switch (action.type) {
        case actionsTypes.SHOW_NOTIFICATION_MESSAGE:
            return {
                ...state,
                toastMessageVisibility: action.payload.visibility,
            }
        case actionsTypes.SET_NOTIFICATION_MESSAGE:
            return {
                ...state,
                notification: action.payload
            }
        case actionsTypes.RESET_NOTIFICATION:
            return { ...initialState }
        default: return state;
    }
}
