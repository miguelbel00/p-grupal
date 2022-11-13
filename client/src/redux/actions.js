import axios from "axios";


export function getDetail(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/${id}`)
            return dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function postUser(payload) {
    return async function (dispatch) {
        let user = axios.post('http://localhost:3000/', payload)
        return dispatch({
            type: 'POST_USER',
            payload: user.data
        })
    }
}
