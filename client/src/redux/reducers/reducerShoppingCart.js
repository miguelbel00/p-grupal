const shoppinginitialState = {
    productCart:  JSON.parse(localStorage.getItem('carrito')) || [],
    suma: JSON.parse(localStorage.getItem('carrito')) || []
}



export default function shoppingReducer(state = shoppinginitialState, { type, payload }) {
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state, 
                productCart: [...state.productCart, payload]
            }
        case 'REMOVE_ONE_CART':
            return{
                ...state,
                productCart: [...state.productCart].filter(i => i.id !== parseInt(payload))
        }
        case 'REMOVE_ALL_CART':
            return{
                ...state,
                productCart: []
        }


        default: 
        return state
    }
}