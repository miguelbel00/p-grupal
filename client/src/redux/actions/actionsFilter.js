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

export function resetFilterCategory() {
    return {
        type: "RESET_FILTER_CATEGORY",
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