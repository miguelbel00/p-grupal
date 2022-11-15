const initialState = {
    filterProducts: []

}


export default function filterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: payload,
                filterProducts: payload
            }
        case 'ORDER_BY_PRICE':
            let price = state.filterProducts
            if (payload === 'All') {
                price = state.products
            } else {
                price = price.sort((a, b) => {
                    const priceA = a.price
                    const priceB = b.price

                    if (payload === 'Min') {
                        return priceA - priceB
                    } if (payload === 'Max') {
                        return priceB - priceA
                    }
                })
            }
            return {
                ...state,
                filterProducts: price
            }

        case "FILTER_BY_CATEGORY":
            const allProducts = state.products
            const categoryFiltered = payload === "Todo" ? allProducts : allProducts.filter(s => s.Categories.find(f => f.name === payload))
            return {
                ...state,
                filterProducts: categoryFiltered
            }
        default:
            return state
    }
}
