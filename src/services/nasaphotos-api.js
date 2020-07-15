import tokenService from '../services/tokenService';
const BASE_URL = 'https://images-api.nasa.gov/';

export function search(formData) {
    return fetch(`${BASE_URL}search?q=${formData.query}&media_type=image`, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'content-type': 'application/json'
        }
    }, {mode: "cors"})
    .then(res => res.json())
}