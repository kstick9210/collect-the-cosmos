import tokenService from '../services/tokenService';
const BASE_URL = 'https://images-api.nasa.gov/';

export function search(query) {
    return fetch(`${BASE_URL}search?q=${query}&media_type=image`, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json())
}