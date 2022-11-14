import axios from "axios";


const server = 'http://localhost:3005'


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
export function getAllProductCart(){
    return async function (dispatch){
        
    }
}


// export function removeOneProduct(){
//     return {
//         type: 'REMOVE_ONE_CART',
//         payload
//     }
// }

// export function removeAllProduct(){
//     return {
//         type: 'REMOVE_ALL_CART',
//         payload
//     }
// }

// export function clearCart(){
//     return {
//         type: 'CLEAR_CART',
//         payload
//     }
// }