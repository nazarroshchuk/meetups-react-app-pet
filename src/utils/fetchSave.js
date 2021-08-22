export function fetchSave(url, requestOptions = {}) {
    return fetch(url,requestOptions)
        .then(response => {
            if (response.status < 400) {
                return response.json()
            }

            return response.json().then(error => {
                const e = new Error('Ups, something is wrong')
                e.data = error;
                throw e;
            })
        })
}
