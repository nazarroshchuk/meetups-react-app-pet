import { takeEvery, call } from 'redux-saga/effects';
import { actionsTypes } from "../constants/actionsTypes";
import { history } from "../history";
import { servicesMeetups } from "../services/meetups";

function* submitNewMeetup(action) {
    const meetupData = action.payload.meetupData;
    yield console.log(meetupData);
    try {
        yield call(servicesMeetups.addNewMeetup, meetupData);
        history.push('/');
    } catch (error) {
        console.log(error)
    }
}

export function* watchAddNewMeetup() {
    yield takeEvery(actionsTypes.ADD_NEW_MEETUP_SUBMIT_NEW_MEETUP,submitNewMeetup);
}
