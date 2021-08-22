import {actionsTypes} from "../constants/actionsTypes";

export const allMeetupsActions = {
    loadAllMeetups,
    saveMeetups,
    loadingStatus,
    addFavorite,
    removeFavorite,
    init
}

function loadAllMeetups() {
    return {
        type: actionsTypes.ALL_MEETUPS_INIT
    }
}

function saveMeetups(meetups) {
    return {
        type: actionsTypes.ALL_MEETUPS_SAVE_STATE,
        payload: { meetups },
    }
}

function loadingStatus(requestStatus) {
    return {
        type: actionsTypes.ALL_MEETUPS_SET_REQUEST_STATUS,
        payload: { requestStatus }
    }
}

function addFavorite(favoriteId) {
    return {
        type: actionsTypes.FAVORITES_ADD_STATE,
        payload: { favoriteId },
    }
}

function removeFavorite(favoriteId) {
    return {
        type: actionsTypes.FAVORITES_REMOVE_STATE,
        payload: { favoriteId }
    }
}

function init() {
    return {
        type: actionsTypes.ALL_MEETUPS_INIT,
    }
}
