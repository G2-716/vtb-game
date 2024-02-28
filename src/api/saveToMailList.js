import {MAIL_LIST_ENDPOINT_URL, MAIL_LIST_API_KEY} from "../constants/api";

export function saveToMailList(data) {
    return fetch(
        `${MAIL_LIST_ENDPOINT_URL}?format=json&api_key=${MAIL_LIST_API_KEY}&field_names[0]=id&field_names[1]=name&field_names[2]=email&data[0][0]=${data.id}&data[0][1]=${data.name}&data[0][2]=${data.email}`,
        { method: 'POST' },
    )
        .then(resp => resp.json())
        .catch(console.log)
}