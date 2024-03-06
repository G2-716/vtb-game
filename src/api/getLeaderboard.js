import {LEADERBOARD_ENDPOINT_URL, LEADERBOARD_API_KEY} from "../constants/api";

export function getLeaderboard() {
    return fetch(LEADERBOARD_ENDPOINT_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${LEADERBOARD_API_KEY}`,
        },
    })
        .then(resp => resp.json())
        .catch(console.log)
}