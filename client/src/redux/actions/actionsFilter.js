

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