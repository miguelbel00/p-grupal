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
export function getDetail(id){
    return async function(dispatch){
        const response = await axios.get(`${server}/products/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: response.data.body
            })     
    }
}

export function postUser(payload) {
    return async function (dispatch) {
        let user = axios.post(`${server}/users`,payload)
        return dispatch({
            type: 'POST_USER',
            payload: user.data.body
        })
    }
}

export function orderByPrice(payload){
        return {
            type: 'ORDER_BY_PRICE',
            payload
        }
        
}