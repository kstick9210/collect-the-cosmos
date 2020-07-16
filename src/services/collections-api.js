import tokenService from '../services/tokenService';
const BASE_URL = '/api/collections';

export function create(collection) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(collection)
    }, {mode: "cors"})
    .then(res => res.json());
}