import { filterData } from "../../functions/functions";

const initialState = {
  filterProducts: [],
  productos1: [],
  categoriesSelected: []
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
    case 'ORDER_MOST_SOLD':
      let sold = state.filterProducts
      if (payload === 'All') {
        sold = state.filterProducts
      }

      sold = sold.sort((a, b) => {
        const soldA = a.sold
        const soldB = b.sold
        const validate = () => {
          if (payload === 'Less Sold') {
            return soldA - soldB
          } else if (payload === 'Best Seller') {
            return soldB - soldA
          }
        }
        return validate()

      })
      return {
        ...state,
        filterProducts: sold
      }
    case "ADD_CATEGORY_FILTER":
      return {
        ...state,
        categoriesSelected: payload
      }

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterProducts: 
          !state.categoriesSelected.length
            ? state.productos1
            : filterData([...state.productos1], state.categoriesSelected)
      };
      case "DELET_FILTER":
        return{
          ...state,
          categoriesSelected: [...state.categoriesSelected.filter(category => category !== payload)]
        }
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
