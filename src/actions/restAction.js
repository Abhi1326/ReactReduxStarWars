/**
 * Created by consultadd on 16/7/17.
 */
import axios from 'axios'


export function get_promise (url, config) {
    return axios.get(url, config)
        .then(checkHttpStatus)
        .then(parseJSON)

}

export function post_promise (url, data = {}, config) {
    return axios.post(url, data, config)
        .then(checkHttpStatus)
        .then(parseJSON)

}

export function put_promise (url, data = {}, config) {
    return axios.put(url, data, config)
        .then(checkHttpStatus)
        .then(parseJSON)

}

function checkHttpStatus (response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    }

}

function parseJSON (response) {

    return response.data
}
