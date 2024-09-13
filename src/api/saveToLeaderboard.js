import {ftClient} from "../constants/api";

export function saveToLeaderboard(data) {
    return ftClient.createRecord(data).catch(console.log);
}