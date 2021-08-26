import {takeEvery, call, put} from 'redux-saga/effects';
import { actionsTypes } from "../constants/actionsTypes";
import { history } from "../history";
import { servicesMeetups } from "../services/meetups";
import { errorActions } from "../actions/errors.actions";
import {addNewMeetupAction} from "../actions/add-new-meetup.actions";
import {RequestStatuses} from "../constants/requestStatuses";
import {allMeetupsActions} from "../actions/all-meetups.actions";
import {notificationsActions} from "../actions/notifications.actions";

function* submitNewMeetup(action) {
    const meetupData = action.payload.meetupData;
    yield put(addNewMeetupAction.setRequestStatus(RequestStatuses.LOADING));
    try {
        yield call(servicesMeetups.addNewMeetup, meetupData);
        yield put(addNewMeetupAction.setRequestStatus(RequestStatuses.SUCCESS));
        yield put(allMeetupsActions.init());
        yield put(notificationsActions.setNotificationMessage('Success', 'Your new meetup was added!'));
        history.push('/');
        yield put(notificationsActions.showNotificationMessage(true));

    } catch (e) {
        yield put(addNewMeetupAction.setRequestStatus(RequestStatuses.FAILED));
        yield put(errorActions.setCriticalError(e));
    }
}

export function* watchAddNewMeetup() {
    yield takeEvery(actionsTypes.ADD_NEW_MEETUP_SUBMIT_NEW_MEETUP,submitNewMeetup);
}
