import {actionsTypes} from "../constants/actionsTypes";

export const allMeetupsActions = {
    loadAllMeetups,
    saveMeetups,
    setMeetupsRequestStatus,
    toggleFavorites,
    setFavoritesRequestStatus,
    deleteMeetup,
    init
}

function init() {
    return {
        type: actionsTypes.ALL_MEETUPS_INIT,
    }
}

function deleteMeetup(id) {
    return {
        type: actionsTypes.ALL_MEETUP_DELETE,
        payload: { id },
    }
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

function setMeetupsRequestStatus(requestStatus) {
    return {
        type: actionsTypes.ALL_MEETUPS_SET_REQUEST_STATUS,
        payload: { requestStatus }
    }
}

function toggleFavorites(favoriteId, isFavorite) {
    return {
        type: actionsTypes.FAVORITES_TOGGLE,
        payload: { favoriteId, isFavorite },
    }
}

function setFavoritesRequestStatus(favoritesRequestStatus) {
    return {
        type: actionsTypes.FAVORITES_MEETUPS_SET_REQUEST_STATUS,
        payload: { favoritesRequestStatus }
    }
}
