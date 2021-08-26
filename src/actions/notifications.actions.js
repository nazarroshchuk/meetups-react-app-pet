import {actionsTypes} from "../constants/actionsTypes";

export const notificationsActions = {
    setNotificationMessage,
    showNotificationMessage,
    reset
}

function setNotificationMessage( title, message) {
    return {
        type: actionsTypes.SET_NOTIFICATION_MESSAGE,
        payload: { title, message }
    }
}

function showNotificationMessage(visibility) {
    return {
        type: actionsTypes.SHOW_NOTIFICATION_MESSAGE,
        payload: {visibility}
    }
}

function reset() {
    return {
        type: actionsTypes.RESET_NOTIFICATION,
    }
}
