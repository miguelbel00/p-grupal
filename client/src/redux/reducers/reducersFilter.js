const initialState = {
  filterProducts: [],
  productos1: []
};

export default function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_PRODUCTS":
      console.log("entro")
      console.log(payload)
      return {
        ...state,
        filterProducts: payload,        
        productos1: payload

      };
    case "ORDER_BY_PRICE":
      let price = state.filterProducts;
      if (payload === "All") {
        price = state.filterProducts;
      } else {
        price = price.sort((a, b) => {
          const priceA = a.price;
          const priceB = b.price;

          if (payload === "Min") {
            return priceA - priceB;
          }
          if (payload === "Max") {
            return priceB - priceA;
          }
        });
      }
      return {
        ...state,
        filterProducts: price,
      };

    case "FILTER_BY_CATEGORY":
      const allProducts = state.filterProducts;
      const categoryFiltered =
        payload === "Todo"
          ? allProducts
          : allProducts.filter((s) =>
              s.Categories.find((f) => f.name === payload)
            );
      return {
        ...state,
        filterProducts: categoryFiltered,
      };
    case "GET_NAME_QUERY":
      console.log(state)
      // return {
      //   ...state,
      //   filterProducts: searchProduct(state.productos1, payload),
      // };
      const filterByName = state.productos1.filter((e) => e.name.toLowerCase().includes(payload.toLowerCase()))
      return {
          ...state,
          filterProducts: filterByName}
    default:
      return state;
  }
}

function searchProduct(product, n){
    let productResult = product.filter(p => p.name.includes(n))
    console.log(productResult)
    if(!productResult.length){
        alert('Product not found')
        return false
    }
    return productResult
}
