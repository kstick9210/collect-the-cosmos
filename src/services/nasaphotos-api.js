import tokenService from '../services/tokenService';
const BASE_URL = '/api/nasaphotos';

export function search(formData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(formData)
    }, {mode: "cors"})
    .then(res => res.json())
}