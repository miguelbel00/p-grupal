const initialState = {
  detail: {},
  products: [],
};

export default function petitionsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "POST_USER":
      return {
        ...state,
      };

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

    default:
      return state;
  }
}



