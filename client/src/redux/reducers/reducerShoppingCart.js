

const shoppinginitialState = {
    productCart: []
}

export default function shoppingReducer(state = shoppinginitialState, { type, payload }) {
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state, 
                productCart: [...state.productCart, payload]
            }
        // case 'REMOVE_ONE_CART':
        //     return{

        // }
        // case 'REMOVE_ALL_CART':
        //     return{

        // }
        // case 'CLEAR_CART':
        //     return{

        // }
        default: 
        return state
    }
}