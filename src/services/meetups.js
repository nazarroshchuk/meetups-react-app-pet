import {DATA_BASE_URL} from "../constants/DATA_BASE_URL";
import { fetchSave } from "../utils/fetchSave";

export const servicesMeetups = {
    addNewMeetup,
    getAllMeetups,
    deleteFavorite,
    addFavorite,
    deleteMeetup,
}

function getAllMeetups() {
    return fetchSave(DATA_BASE_URL.URL + 'meetups.json');
}

function addFavorite(id) {

    const updatedData = {
        isFavorite: true,
    }
    const requestOption = {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetchSave(DATA_BASE_URL.URL + `/meetups/${id}.json`, requestOption);
}

function deleteFavorite(id) {
    const updatedData = {
        isFavorite: false,
    }
    const requestOption = {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetchSave(DATA_BASE_URL.URL + `/meetups/${id}.json`, requestOption);
}

function addNewMeetup(data) {
    return fetch(DATA_BASE_URL.URL + 'meetups.json', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function deleteMeetup(id) {
    const requestOption = {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetchSave(DATA_BASE_URL.URL + `/meetups/${id}.json`, requestOption);
}


