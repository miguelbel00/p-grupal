
export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}

export function addCategorieFilter (categoryArray){
    return {
        type: "ADD_CATEGORY_FILTER",
        payload: categoryArray
    }
}

export function filterCategory() {
    return {
        type: "FILTER_BY_CATEGORY",
    }
}

export function deleteFilter(category){
    return {
        type:"DELET_FILTER",
        payload: category
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