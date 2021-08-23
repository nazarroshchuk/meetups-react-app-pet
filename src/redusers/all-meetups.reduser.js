import { actionsTypes } from "../constants/actionsTypes";

const initialState = {
    meetups: [],
    requestStatus: null,
    favoritesRequestStatus: null,
}

export const allMeetups = (state= initialState, action) => {
    switch (action.type) {
        case actionsTypes.ALL_MEETUPS_SAVE_STATE:
            return {
                ...state,
                meetups: action.payload.meetups
            }
        case actionsTypes.ALL_MEETUPS_SET_REQUEST_STATUS:
            return {
                ...state,
                requestStatus: action.payload.requestStatus
            }
        case actionsTypes.FAVORITES_MEETUPS_SET_REQUEST_STATUS:
            return {
                ...state,
                favoritesRequestStatus: action.payload.favoritesRequestStatus
            }
        default: return state;
    }
}
