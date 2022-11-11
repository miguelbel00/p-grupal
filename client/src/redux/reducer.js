const initialState = {
    detail: {}
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
    default:
        return state
    }
}