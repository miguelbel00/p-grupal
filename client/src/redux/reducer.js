

const initialState = {

}

export default function rootReducer(state= initialState,{type,payload}){
switch(type){
case 'POST_USER':
    return{
       ...state 
    }
    default:
        return state
}
}