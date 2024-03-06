import {LEADERBOARD_API_KEY, LEADERBOARD_ENDPOINT_URL} from "../constants/api";

export function saveToLeaderboard(data) {
    return fetch(LEADERBOARD_ENDPOINT_URL, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${LEADERBOARD_API_KEY}`,
        },
    })
        .then(resp => resp.json())
        .catch(console.log)
}