
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
export function searchProduct(payload){
    return{
        type: 'SEARCH_PRODUCT',
        payload
    }
}
export function orderMostSold(payload){
    return{
        type: 'ORDER_MOST_SOLD',
        payload
    }
}