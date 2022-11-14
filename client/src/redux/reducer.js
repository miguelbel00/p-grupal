const initialState = {
    detail: {},
    products: [],
    filterProducts: [], //modificar orden
}


export default function rootReducer(state= initialState,{type,payload}){
switch(type){
    case 'POST_USER':
        return{
            ...state 
    }
    case "GET_DETAIL":
        return{
            ...state,
            detail: payload
        }
    case 'GET_ALL_PRODUCTS':
        return{
            ...state,
            products: payload,
            filterProducts: payload
        }
        case 'ORDER_BY_PRICE':
            let price = state.filterProducts
            if(payload === 'All'){
                price = state.products
            }else{
                price = price.sort((a,b) => {
                    const priceA = a.price
                    const priceB = b.price
                    
                    if(payload === 'Min'){
                        return priceA - priceB
                    }if(payload === 'Max'){
                        return priceB - priceA
                    }
                })
            }

            return{
                ...state,
                filterProducts: price
            }
    default:
        return state
    }
}
