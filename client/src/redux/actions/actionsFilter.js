import axios from "axios";
const {REACT_APP_SERVER_BACK} = process.env

export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    }
}

export function filterCategory(payload) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload
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