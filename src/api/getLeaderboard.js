import {ftClient} from "../constants/api";

export function getLeaderboard() {
    return ftClient.loadRecordsPublicData().catch(console.log);
}