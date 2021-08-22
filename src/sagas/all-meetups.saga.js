import { call, takeEvery, put, select } from "redux-saga/effects";
import { actionsTypes } from "../constants/actionsTypes";
import { firebaseDataConverterToArray } from "../utils/firebaseDataConverterToArray";
import { allMeetupsActions } from "../actions/all-meetups.actions";
import { servicesMeetups } from "../services/meetups";


function* init() {
    const requestStatus = yield select(state => state.allMeetups.requestStatus);
    console.log(requestStatus)
    if (requestStatus !== 'success') {
        yield put(allMeetupsActions.loadingStatus('loading'));
    }
    try {
        const responseMeetups = yield call(servicesMeetups.getAllMeetups);
        const meetups = firebaseDataConverterToArray(responseMeetups);
        yield put(allMeetupsActions.saveMeetups(meetups));
        yield put(allMeetupsActions.loadingStatus('success'));
    } catch (error)  {
        console.log(error);
        yield put(allMeetupsActions.loadingStatus('failed'));
    } finally {

    }
}

function* addFavorites(action) {
    try {
        const response = yield call(servicesMeetups.addFavorite, action.payload.favoriteId);
        console.log(response)
        yield put(allMeetupsActions.init());
    } catch (e) {
        console.log(e)
    }
}

function* deleteFavorites(action) {
    try {
        const response = yield call(servicesMeetups.deleteFavorite, action.payload.favoriteId);
        console.log(response)
        yield put(allMeetupsActions.init());
    } catch (e) {
        console.log(e)
    }
}


export function* watchAllMeetups() {
    yield takeEvery(actionsTypes.ALL_MEETUPS_INIT, init);
    yield takeEvery(actionsTypes.FAVORITES_ADD_STATE, addFavorites);
    yield takeEvery(actionsTypes.FAVORITES_REMOVE_STATE, deleteFavorites);
}
