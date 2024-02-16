import {GOOGLE_TABLES_ENDPOINT_URL} from "../constants/api";

export function getLeaderboard() {
    return fetch(GOOGLE_TABLES_ENDPOINT_URL, { redirect: 'follow' },)
        .then(resp => resp.json())
        .then(resp => resp?.reduce((acc, [id, name, email, points]) => {
            if (id && name && email) {
                const data = {id, name, email, points: +points || 0}

                return {
                    result: [...acc.result, data],
                    resultById: {...acc.resultById, [id]: data},
                    resultByEmail: {...acc.resultByEmail, [email]: data},
                }
            }

            return acc
        }, {
            result: [],
            resultById: {},
            resultByEmail: {},
        }))
        .catch(console.log)
}