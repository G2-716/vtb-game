import {ftClient} from "../constants/api";

export function getLeaderboard() {
    return ftClient.loadProjectState()
        .then(response => response?.data ?? [])
        .catch(console.log);
}