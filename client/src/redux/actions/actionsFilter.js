import axios from "axios";

const server = 'http://localhost:3005'

export function getAllProducts() {
    return async function (dispatch) {
        var json = await axios.get(`${server}/products`)
        return dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: json.data.body,
        })
    }
}

export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}

export function filterCategory(payload) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload
    }
}