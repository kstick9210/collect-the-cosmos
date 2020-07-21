import tokenService from '../services/tokenService';
const BASE_URL = '/api/collections/';

export function index() {
    return fetch(BASE_URL, {
        headers: {'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }, {mode: "cors"})
    .then(res => res.json());
}

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

export function update(collection) {
    return fetch(`${BASE_URL}${collection._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(collection)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function deleteCollection(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}