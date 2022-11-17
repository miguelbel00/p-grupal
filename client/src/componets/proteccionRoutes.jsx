import { useHistory } from "react-router-dom"
const jwt = require('jsonwebtoken');


export default function ProteccionRoutes({user,children}){
    const history = useHistory()

    if(user?.body?.token){
        try {
            
            const decoded = jwt.verify(user.body.token, 'thisissalt');
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