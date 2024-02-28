import {LEADERBOARD_ENDPOINT_URL} from "../constants/api";

export function getLeaderboard() {
    return fetch(`${LEADERBOARD_ENDPOINT_URL}/latest?meta=false`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(resp => resp.json())
        .catch(console.log)
}