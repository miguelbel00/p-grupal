import { useHistory } from "react-router-dom"
const jwt = require('jsonwebtoken');


export default function ProteccionRoutes({user,children}){
    const history = useHistory()
    if(user){
        try {
            
            const decoded = jwt.verify(user, 'thisissalt');
            if (decoded.isAdmin === true) {
                return children
            }
           
        } catch (error) {
            console.log(error)
        }
    }   
    history.push('/')
}