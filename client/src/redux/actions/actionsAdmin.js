import axios from "axios";
const {REACT_APP_SERVER_BACK} = process.env


export function getUsers() {
    return async function (dispatch) {
        let json = await axios.get(`${REACT_APP_SERVER_BACK}/users`)
        return dispatch({
            type: 'GET_ALL_USERS',
            payload: json.data.body
        })
    }
}

export function getProducts() {
    return async function (dispatch) {
        let json = await axios.get(`${REACT_APP_SERVER_BACK}/products`)
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

export function getReviews(){
    return async function(dispatch){
        let json = await axios.get(`${REACT_APP_SERVER_BACK}/reviews`)
        return dispatch({
            type: "GET_ALL_REVIEWS",
            payload: json.data.body
        })
    }
}

export function getCategory(){
    return async function(dispatch){
        let json = await axios.get(`${REACT_APP_SERVER_BACK}/categories`)
        return dispatch({
            type: "GET_ALL_CATEGORY",
            payload: json.data.body
        })
    }
}
export function getTransactions(){
    return async function(dispatch){
        let json = await axios.get(`${REACT_APP_SERVER_BACK}/transactions`)
        return dispatch({
            type: "GET_ALL_TRANSACTION",
            payload: json.data.body
        })
    }
}