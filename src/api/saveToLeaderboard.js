import {LEADERBOARD_ENDPOINT_URL} from "../constants/api";

export function saveToLeaderboard(data) {
    return fetch(LEADERBOARD_ENDPOINT_URL, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(resp => resp.json())
        .catch(console.log)
}