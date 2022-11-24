import { useHistory } from "react-router-dom"
const {REACT_APP_JWT_SECRETO} = process.env
const jwt = require('jsonwebtoken');


export default function ProteccionRoutes({user,children}){
    const history = useHistory()
    if(user){
        try {
            const decoded = jwt.verify(user?.body?.token ?user.body.token :user, REACT_APP_JWT_SECRETO);
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