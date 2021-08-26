import {actionsTypes} from "../constants/actionsTypes";

const initialState = {
    submitMeetupRequest: null,
}

export const addNewMeetup = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_NEW_MEETUP_SET_REQUEST_STATUS:
            return {
                ...state,
                submitMeetupRequest: action.payload.requestStatus,
            }
        default: return state;
    }
}
