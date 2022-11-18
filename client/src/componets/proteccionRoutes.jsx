import { useHistory } from "react-router-dom"
const jwt = require('jsonwebtoken');


export default function ProteccionRoutes({user,children}){
    const history = useHistory()
    console.log(user)
    if(user){
        try {
            
            const decoded = jwt.verify(user, 'thisissalt');
            console.log(decoded)
            if (decoded.isAdmin === true) {
                return children
            }
           
        } catch (error) {
            console.log(error)
        }
    }   
    history.push('/')
    return <p>soy un cacahuate</p>
}