import {DATA_BASE_URL} from "../constants/DATA_BASE_URL";
import { fetchSave } from "../utils/fetchSave";

export const servicesMeetups = {
    addNewMeetup,
    getAllMeetups,
    deleteFavorite,
    addFavorite,
}

function getAllMeetups() {
    return fetch(DATA_BASE_URL.URL + 'meetups.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return failure(response);
        })

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

const failure = response =>
    response
        .text()
        .then(text => Promise.reject({
            status: response.status,
            message: (text || response.statusText)
        }));
