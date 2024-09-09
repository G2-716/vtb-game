import {ftClient} from "../constants/api";

export function saveToLeaderboard(data) {
    return ftClient.createRecord(data)
        .then(response => response?.data ?? null)
        .catch(console.log);
}