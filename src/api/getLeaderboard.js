import {GET_ENDPOINT_URL} from "../constants/api";

export function getLeaderboard() {
    return fetch(GET_ENDPOINT_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(resp => resp.json())
        .catch(console.log)
}