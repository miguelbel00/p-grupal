import axios from "axios";
const {REACT_APP_SERVER_BACK} = process.env


export function addProductToCart(id) {
    return async function (dispatch) {
        const response = await axios.get(`${REACT_APP_SERVER_BACK}/products/${id}`)
        return dispatch({
            type: "ADD_TO_CART",
            payload: response.data.body
        })
    }
}

export function removeOneProduct(payload) {
    return {
        type: 'REMOVE_ONE_CART',
        payload
    }
}

export function removeAllProduct(payload) {
    return {
        type: 'REMOVE_ALL_CART',
        payload
    }
}

export function plusCartTotal(payload) {
    return {
        type: 'PLUS_CART',
        payload
    }
}
