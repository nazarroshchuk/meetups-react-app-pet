import {actionsTypes} from "../constants/actionsTypes";

export const addNewMeetupAction = {
    setRequestStatus,
    submitNewMeetup,
}

function setRequestStatus( requestStatus ) {
    return {
        type: actionsTypes.ADD_NEW_MEETUP_SET_REQUEST_STATUS,
        payload: { requestStatus }
    }
}

function submitNewMeetup(meetupData) {
    return {
        type: actionsTypes.ADD_NEW_MEETUP_SUBMIT_NEW_MEETUP,
        payload: { meetupData },
    }
}



