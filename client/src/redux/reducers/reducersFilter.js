import { filterData, orederOption } from "../../functions/functions";

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
    case "ORDER_PRODUCTS":
   
      return {
        ...state,
        filterProducts: orederOption([...state.filterProducts], payload)
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
