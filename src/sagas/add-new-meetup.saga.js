import {takeEvery, call, put} from 'redux-saga/effects';
import { actionsTypes } from "../constants/actionsTypes";
import { history } from "../history";
import { servicesMeetups } from "../services/meetups";
import { errorActions } from "../actions/errors.actions";

function* submitNewMeetup(action) {
    const meetupData = action.payload.meetupData;
    try {
        yield call(servicesMeetups.addNewMeetup, meetupData);
        history.push('/');
    } catch (e) {
        yield put(errorActions.setCriticalError(e));
    }
}

export function* watchAddNewMeetup() {
    yield takeEvery(actionsTypes.ADD_NEW_MEETUP_SUBMIT_NEW_MEETUP,submitNewMeetup);
}
