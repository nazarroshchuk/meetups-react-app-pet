import { call, takeEvery, put, select } from "redux-saga/effects";
import { actionsTypes } from "../constants/actionsTypes";
import { firebaseDataConverterToArray } from "../utils/firebaseDataConverterToArray";
import { allMeetupsActions } from "../actions/all-meetups.actions";
import { servicesMeetups } from "../services/meetups";
import { RequestStatuses } from "../constants/requestStatuses";
import { errorActions } from "../actions/errors.actions";


function* init() {
    const requestStatus = yield select(state => state.allMeetups.requestStatus);
    if (requestStatus !== RequestStatuses.SUCCESS) {
        yield put(allMeetupsActions.setMeetupsRequestStatus(RequestStatuses.LOADING));
    }
    try {
        const responseMeetups = yield call(servicesMeetups.getAllMeetups);
        const meetups = firebaseDataConverterToArray(responseMeetups);
        yield put(allMeetupsActions.saveMeetups(meetups));
        yield put(allMeetupsActions.setMeetupsRequestStatus(RequestStatuses.SUCCESS));
    } catch (e) {
        yield put(errorActions.setCriticalError(e));
        yield put(allMeetupsActions.setMeetupsRequestStatus(RequestStatuses.FAILED));
    }
}

function* toggleFavorites(action) {
    const { favoriteId, isFavorite } = action.payload
    yield put(allMeetupsActions.setFavoritesRequestStatus(RequestStatuses.LOADING));
    try {
        isFavorite
            ? yield call(servicesMeetups.deleteFavorite, favoriteId)
            : yield call(servicesMeetups.addFavorite, favoriteId);

        yield put(allMeetupsActions.setFavoritesRequestStatus(RequestStatuses.SUCCESS));
        yield put(allMeetupsActions.init());
    } catch (e) {
        yield put(errorActions.setCriticalError(e));
        yield put(allMeetupsActions.setFavoritesRequestStatus(RequestStatuses.FAILED));
    }
}

function* deleteMeetup(action) {
    try {
        yield call(servicesMeetups.deleteMeetup, action.payload.id);
        yield put(allMeetupsActions.init());
    } catch (e) {
        yield put(errorActions.setCriticalError(e));
    }
}

export function* watchAllMeetups() {
    yield takeEvery(actionsTypes.ALL_MEETUPS_INIT, init);
    yield takeEvery(actionsTypes.ALL_MEETUP_DELETE, deleteMeetup);
    yield takeEvery(actionsTypes.FAVORITES_TOGGLE, toggleFavorites);
}
