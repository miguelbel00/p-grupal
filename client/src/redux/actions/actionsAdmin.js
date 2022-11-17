import axios from "axios";
const server = 'http://localhost:3005'

export function getUsers() {
    return async function (dispatch) {
        let json = await axios.get(`${server}/users`)
        console.log(json.data)
        return dispatch({
            type: 'GET_ALL_USERS',
            payload: json.data.body
        })
    }
}

export function getProducts() {
    return async function (dispatch) {
        let json = await axios.get(`${server}/products`)
        console.log(json)
        return dispatch({
            type: "GET_ALL_PRODUCTS",
            payload: json.data.body
        })
    }
}


export function adminList(payload) {
    return async function (dispatch) {
        return dispatch({
            type: 'ADMIN_PAGE',
            payload: payload
        })
    }
}