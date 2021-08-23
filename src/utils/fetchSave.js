
export function fetchSave(url, requestOptions = {}) {
    return fetch(url, requestOptions)
        .then(response => {
            if (response.status < 400) {
                return response.json()
            }

            return failure(response);

            // return response.json().then(error => {
            //     const e = new Error('Ups, something is wrong')
            //     e.data = error;
            //     throw e;
            // })
        })
}

const failure = response =>
    response
        .text()
        .then(text => Promise.reject({
            status: response.status,
            message: (text || response.statusText)
        }));
