const initialState = {
    detail: {},
    products: [],
    filterProducts: [], //modificar orden

}


export default function petitionsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'POST_USER':
            return {
                ...state
            }

        case "GET_DETAIL":
            return {
                ...state,
                detail: payload
            }

        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: payload,
                filterProducts: payload
            }
            
        default:
            return state
    }
}
