import { combineReducers } from "redux";
import { addNewMeetup } from "./add-new-meetup.reducer";
import { connectRouter } from "connected-react-router";
import { history } from "../history";
import { allMeetups } from "./all-meetups.reduser";
import { error } from "./error.reducer";

export const rootReducer = combineReducers({
    router: connectRouter(history),
    addNewMeetup,
    allMeetups,
    error,
});
