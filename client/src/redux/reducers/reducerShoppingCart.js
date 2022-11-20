const shoppinginitialState = {
    productCart: JSON.parse(localStorage.getItem('carrito')) || [],
    totalCart: JSON.parse(localStorage.getItem('totalCart')) || []

}



export default function shoppingReducer(state = shoppinginitialState, { type, payload }) {
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                productCart: [...state.productCart, payload]
            }
        case 'REMOVE_ONE_CART':
            return {
                ...state,
                productCart: [...state.productCart].filter(i => i.id !== parseInt(payload))
            }
        case 'REMOVE_ALL_CART':
            return {
                ...state,
                productCart: [],
                totalCart: []
            }
        case 'PLUS_CART':
            return {
                ...state,
                totalCart: payload
            }

        default:
            return state
    }
}