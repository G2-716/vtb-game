import {MAIL_LIST_ENDPOINT_URL, MAIL_LIST_API_KEY, MAIL_LIST_ID} from "../constants/api";

export function saveToMailList(data) {
    return fetch(
        `${MAIL_LIST_ENDPOINT_URL}?format=json&api_key=${MAIL_LIST_API_KEY}&field_names[0]=id_vtb&field_names[1]=Name&field_names[2]=email&field_names[3]=email_list_ids&field_names[4]=scores&data[0][0]=${data.id}&data[0][1]=${data.name}&data[0][2]=${data.email}&data[0][3]=${MAIL_LIST_ID}&data[0][4]=${data.points}`,
        { method: 'POST' },
    )
        .then(resp => resp.json())
        .catch(console.log)
}