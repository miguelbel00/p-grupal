const initialState = {
  filterProducts: [],
  productos1: [],
};

export default function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        filterProducts: payload,
        productos1: payload,
      };
    case "ORDER_BY_PRICE":
      let orderedProducts = state.filterProducts;
      if (payload === "All") {
        orderedProducts = state.filterProducts;
      } else {
        orderedProducts.sort((a, b) => {
          if (payload === "Min") return a.price - b.price;
          return b.price - a.price;
        });
      }
      return {
        ...state,
        filterProducts: orderedProducts,
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterProducts:
          payload === "Todo"
            ? state.filterProducts
            : state.filterProducts.filter((product) =>
            product.Categories.find((category) => category.name === payload)
              )
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        filterProducts: state.productos1.filter((product) =>
          product.name.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
}

