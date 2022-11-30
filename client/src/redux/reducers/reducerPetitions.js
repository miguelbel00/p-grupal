const initialState = {
  detail: {},
  products: [],
  userOne: null,
  user: JSON.parse(localStorage.getItem('user')) ||  {},
};

export default function petitionsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: payload,
      };

    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: payload,

      };
    
      case "POST_PRODUCT":
        return {
          ...state
        }

    case "REGISTER_USER":
      return {
        ...state,
        user: payload,

      };
    case "LOGIN_USER":
      return {
        ...state,
        user: payload,

      };

    case "GET_ONE_USER": 
    return {
      ...state,
      userOne: payload
    }
    case "LOG_OUT": 
    return {
      ...state,
      user: payload
    }
    
    case "EDIT_USER": 

    return {
      ...state,
    }

    default:
      return state;
  }
}


