import axios from "axios";
const {REACT_APP_SERVER_BACK} = process.env


export function getAllProducts() {
  return async function (dispatch) {
    var json = await axios.get(`${REACT_APP_SERVER_BACK}/products`);
    return dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: json.data.body,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`${REACT_APP_SERVER_BACK}/products/${id}`);
    return dispatch({
      type: "GET_DETAIL",
      payload: response.data.body,
    });
  };
}

export function registerUser(payload) {
  return async function (dispatch) {
    return axios
      .post(`${REACT_APP_SERVER_BACK}/auth/register`, payload)
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
      .post(`${REACT_APP_SERVER_BACK}/auth/login`, payload)
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
        const response = await axios.post(`${REACT_APP_SERVER_BACK}/products`, payload)
        const data = response.data
        return dispatch({
            type: "POST_PRODUCT",
            payload: data
        })
    }
};

export function postImage(payload) {
  return async function (dispatch) {
      const response = await axios.post(`${REACT_APP_SERVER_BACK}/upload`, payload)
      const data = response.data
      return dispatch({
          type: "POST_IMAGE",
          payload: data
      })
  }
};


export function getNameQuery(payload) {
  return {
    type: "GET_NAME_QUERY",
    payload,
  };
}

export function LogOut(payload) {
  return {
    type: "LOG_OUT",
    payload,
  };
}

export function getUser(userId) {
  return async function (dispatch) {
    if (userId===null) {
      return dispatch({
        type: "GET_ONE_USER",
        payload: userId
      })
    }
    return axios
    .get(`${REACT_APP_SERVER_BACK}/users/${userId}`)
    .then((result) =>
      dispatch({
        type: "GET_ONE_USER",
        payload: result.data.body
      })
    )
    .catch((error) => { 
    });
  }
};



export function updateUser(payload) {
  return async function (dispatch) {
    console.log(payload)
      const response = await axios.put(`${REACT_APP_SERVER_BACK}/users`, payload)
      const data = response.data.body
      return dispatch({
          type: "EDIT_USER",
          payload: data
      })
  }
};

export const addReview = (payload) => {
  return async function (dispatch) {
      try {
          const response = await axios.post(`${REACT_APP_SERVER_BACK}/reviews`, payload)
  
          return dispatch ({
            type: "ADD_REVIEW",
            payload: response.data.body
          })
      } catch (error) {
          dispatch({
              type: 'ERROR',
              payload: error
          })     
      }
  }
}
