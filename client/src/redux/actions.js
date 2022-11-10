import axios from "axios";
/* const product = {
    name: "pc gamer",
    description: "Especialistas en Hardware Gamer. Más de 20 años de experiencia.Más de 100.000 operaciones nos avalan. Mercadolider Platinum.",
    image: "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp",
    price: 90.000,
    categories: ["ofice", "gamer"]
} */

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
        let user = axios.post('Example', payload)
        return dispatch({
            type: 'POST-USER',
            payload: user
        })
    }
}
