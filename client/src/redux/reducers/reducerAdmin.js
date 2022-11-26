const initialState = {
    users: [],
    products: [],
    adminList: "",
    reviews:[],
    categories:[],
    transactions: [],
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
        default:
            return state;
    }
}