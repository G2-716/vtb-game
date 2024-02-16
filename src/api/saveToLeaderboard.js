import {GOOGLE_TABLES_ENDPOINT_URL} from "../constants/api";

export function saveToLeaderboard(user, points) {
    return fetch(
        `${GOOGLE_TABLES_ENDPOINT_URL}?id=${user.id}&name=${user.name}&email=${user.email}&points=${points}`,
        { method: 'POST', redirect: 'follow' },
    )
        .then(resp => resp.json())
        .catch(console.log)
}