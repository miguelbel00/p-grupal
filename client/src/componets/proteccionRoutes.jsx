import { useHistory } from "react-router-dom"
const jwt = require('jsonwebtoken');


export default function ProteccionRoutes({user,children}){
    const history = useHistory()
    if(user){
        try {
            
            const decoded = jwt.verify(user, 'thisissalts');
            if (decoded.isAdmin === true) {
                return children
            }
           
        } catch (error) {
            console.log(error)
        }
    }   
    history.push('/')
    return<>NOT ALLOWED</>
}