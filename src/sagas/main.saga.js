import { fork } from 'redux-saga/effects';
import {watchAddNewMeetup} from "./add-new-meetup.saga";
import {watchAllMeetups} from "./all-meetups.saga";

export function* watchMain() {
   yield fork(watchAddNewMeetup);
   yield fork(watchAllMeetups);
}
