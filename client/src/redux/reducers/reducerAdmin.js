const initialState = {
    users: [],
    products: [],
    adminList: "",
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
        default:
            return state;
    }
}