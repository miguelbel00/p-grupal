const initialState = {
    detail: {},
    products: []
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
    case 'GET_PRODUCTS':
        return{
            ...state,
            products: payload
        }
    default:
        return state
    }
}