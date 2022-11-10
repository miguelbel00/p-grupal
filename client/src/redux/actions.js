import axios from "axios";



export default function postUser(payload){
return async function(dispatch){
 let user=axios.post('Example',payload)
 return dispatch({
  type:'POST-USER',
  payload:user
  
 })

}
}