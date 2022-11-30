import axios from "axios";
const {REACT_APP_SERVER_BACK} = process.env

export function orderProducts(payload) {
    return {
        type: 'ORDER_PRODUCTS',
        payload
    }
}

export function addCategorieFilter (categoryArray){
    return {
        type: "ADD_CATEGORY_FILTER",
        payload: categoryArray
    }
}

export function filterCategory() {
    return {
        type: "FILTER_BY_CATEGORY",
    }
}

export function deleteFilter(category){
    return {
        type:"DELET_FILTER",
        payload: category
    }
}
export function searchProduct(payload){
    return{
        type: 'SEARCH_PRODUCT',
        payload
    }
}
export function orderMostSold(payload){
    return{
        type: 'ORDER_MOST_SOLD',
        payload
    }
}

export function getAllProducts() {
    return async function (dispatch) {
      var json = await axios.get(`${REACT_APP_SERVER_BACK}/products`);
      return dispatch({
        type: "GET_ALL_PRODUCTS",
        payload: json.data.body,
      });
    };
  }

  export function getAllCategories() {
    return async function (dispatch) {
      var json = await axios.get(`${REACT_APP_SERVER_BACK}/categories`);
      return dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: json.data.body,
      });
    };
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
  
  
  export function orederOption(array, orderTipe) {
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