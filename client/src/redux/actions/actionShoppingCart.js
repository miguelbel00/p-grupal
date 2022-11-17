import axios from "axios";


const server = 'https://p-grupal-production.up.railway.app/'


export function addProductToCart(id){
    console.log(id)
    return async function (dispatch) {
        const response = await axios.get(`${server}/products/${id}`)
        return dispatch({
            type: "ADD_TO_CART",
            payload: response.data.body
        })
    }
}

export function removeOneProduct(payload){
    return {
        type: 'REMOVE_ONE_CART',
        payload
    }
}

export function removeAllProduct(payload){
    return {
        type: 'REMOVE_ALL_CART',
        payload
    }
}


