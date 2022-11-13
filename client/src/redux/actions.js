import axios from "axios";

const server = 'http://localhost:3005'

export function getAllProducts(){
    return async function(dispatch){
        var json = await axios.get(`${server}/products`)
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: json.data.body,
        })
    }
}


export function getDetail(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function postUser(payload) {
    return async function (dispatch) {
        let user = axios.post('http://localhost:3000/', payload)
        return dispatch({
            type: 'POST_USER',
            payload: user.data
        })
    }
}

export function orderByPrice(payload){
        return {
            type: 'ORDER_BY_PRICE',
            payload
        }
        
}