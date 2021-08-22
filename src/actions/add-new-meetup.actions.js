import {actionsTypes} from "../constants/actionsTypes";

const setRequestStatus = (isLoading) => {
    return {
        type: actionsTypes.ADD_NEW_MEETUP_SET_REQUEST_STATUS,
        payload: { isLoading }
    }
}

const submitNewMeetup = (meetupData) => {
    return {
        type: actionsTypes.ADD_NEW_MEETUP_SUBMIT_NEW_MEETUP,
        payload: {meetupData},
    }
}


export const addNewMeetupAction = {
    setRequestStatus,
    submitNewMeetup,
}
