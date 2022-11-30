const initialState = {
    users: [],
    products: [],
    adminList: "",
    reviews:[],
    categories:[],
    transactions: [],
    user:{},
    product:{},
};

export default function reducerAdmin(
    state = initialState,
    { type, payload }
) {     
    switch (type) {
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: payload
            }
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                products: payload
            }
        case 'ADMIN_PAGE':
            return {
                ...state,
                adminList: payload
            }
        case "GET_ALL_REVIEWS":
            return{
                ...state,
                reviews: payload
            }
        case "GET_ALL_CATEGORY":
            return{
                ...state,
                categories: payload
            }
        case "GET_ALL_TRANSACTION":
            return{
                ...state,
                transactions: payload
            }
        case "UPDATE_TRANSACTION_ADMIN":
            return{
                ...state, 
                transactions:payload
            }
        case "UPDATE_PRODUCT_ADMIN":
            return{
                ...state, 
                products:payload
            }
        case "CREATE_USER_ADMIN":
            return {
                ...state,
                users: payload,
            }
        case "GET_ONE_USER_ADMIN":
            return {
                ...state, 
                user: payload
            }
        case "GET_ONE_PRODUCT":
            return {
                ...state, 
                product: payload
            }
        case "CLEAR_ONE_USER":
            return {
                ...state, 
                user: {}
            }
        case "CLEAR_ONE_PRODUCT":
            return {
                ...state, 
                product: {}
            }
        case "CREATE_CATEGORY":
            return {
                ...state,
                categories: payload,
            }
        case "DELETE_CATEGORY":
            return {
                ...state,
                categories: payload,
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: payload,
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: payload,
            }
        case "DELETE_REVIEW":
            return {
                ...state,
                reviews: payload,
            }
        case "DELETE_USER":
            return {
                ...state,
                users: payload,
            }
        default:
            return state;
    }
}