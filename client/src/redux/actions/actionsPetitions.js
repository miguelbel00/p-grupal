import axios from "axios";

const server = "http://localhost:3005";

export function getAllProducts() {
  return async function (dispatch) {
    var json = await axios.get(`${server}/products`);
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: json.data.body,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`${server}/products/${id}`);
    return dispatch({
      type: "GET_DETAIL",
      payload: response.data.body,
    });
  };
}

export function registerUser(payload) {
  return async function (dispatch) {
    return axios
      .post(`${server}/auth/register`, payload)
      .then((result) =>
        dispatch({
          type: "REGISTER_USER",
          payload: result.data,
        })
      )
      .catch((error) => {  
        dispatch(
            {
            type: "REGISTER_USER",
            payload: error.response.data.split('<')[9].split(':')[2]
    
        })

      });
  };
}
export function loginUser(payload) {
  return async function (dispatch) {
    return axios
      .post(`${server}/auth/login`, payload)
      .then((result) =>
        dispatch({
          type: "LOGIN_USER",
          payload: result.data,
        })
      )
      .catch((error) => {  
        dispatch(
            {
            type: "LOGIN_USER",
            payload: error.response.data.split('<')[9].split(':')[2]
    
        })

      });
  };
}


export function postProduct(payload) {
    return async function (dispatch) {
        const response = await axios.post(`${server}/products`, payload)
        const data = response.data
        return dispatch({
            type: "POST_PRODUCT",
            payload: data
        })
    }
}



export function getNameQuery(payload) {
  return {
    type: "GET_NAME_QUERY",
    payload,
  };
}

