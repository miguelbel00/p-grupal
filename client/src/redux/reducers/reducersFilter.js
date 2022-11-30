

const initialState = {
  filterProducts: [],
  productos1: [],
  categoriesSelected: [],
  allCategories: []
};

export default function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        filterProducts: payload,
        productos1: payload,
      };

    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        allCategories: payload
      };

    case "ORDER_PRODUCTS":
      return {
        ...state,
        filterProducts: orederedOption([...state.filterProducts], payload)
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

        case "RESET_FILTER_CATEGORY":
          return {
            ...state,
            categoriesSelected: []
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



export function filterData(data, filtersArray) {
  if (filtersArray.length < 1) return data

  data = data.filter((product) => product.Categories.find((category) => category.name === filtersArray[0]))
  return filterData(data, filtersArray.slice(1))

}


export function orderByProperty(array, property) {

  
  if (array.length < 1) return array

  const left = []
  const right = []
  const pybot = array[0]

  for (let i = 1; i < array.length; i++) {
    array[i][property] < pybot[property] ? left.push(array[i]) : right.push(array[i])
  }
  return [].concat(orderByProperty(left, property), pybot, orderByProperty(right, property))

}


export function orederedOption(array, orderTipe) {
  const verify = array.filter(e => e.sold !== 0)
  switch (orderTipe) {
    case "All":
      return array

    case "Min":
      return orderByProperty(array, "price")

    case "Max":
      return orderByProperty(array, "price").reverse()

    case "Less Sold":
      
      return verify.length ? orderByProperty(array, "sold") : array

      case "Best Seller":

      return verify.length ? orderByProperty(array, "sold").reverse() : array
    default: return array
      
  }
}