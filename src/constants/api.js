import { FTClient } from "ft-client";

export const LEADERBOARD_ENDPOINT_URL = "https://games-admin.fut.ru/api/";
export const LEADERBOARD_PROJECT_ID = "vtb-tower";

export const MAIL_LIST_ID = "83";
export const MAIL_LIST_API_KEY = "6a173mswjuh4kpgc9f9s5ejckj8rf7ksgnoj59pe";
export const MAIL_LIST_ENDPOINT_URL = "https://api.unisender.com/ru/api/importContacts";

export const ftClient = new FTClient(LEADERBOARD_ENDPOINT_URL, LEADERBOARD_PROJECT_ID);
