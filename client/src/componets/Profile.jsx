import React,{useState,useEffect} from "react"
import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import Styles from "../styles/profile.module.css"
import CardUser from "./CardUser"
const {REACT_APP_JWT_SECRETO} = process.env
const jwt = require('jsonwebtoken');

export default function Profile() {

    const [user, setUser] = useState(null)
    const userJWT = useSelector(state => state.petitionsReducer.user);
    const { userAuth0, isAuthenticated } = useAuth0()


    
    if(userJWT && user===null){
        try {
            const decoded = jwt.verify(userJWT, REACT_APP_JWT_SECRETO);
            setUser(decoded)
        } catch (error) {
            console.log(error)
        }
    } 
    
    return (     

            <div className={Styles.container} >           
            <CardUser user={user}/>
        
                <Link to={"/"}><button>Edit Profile</button></Link>
            </div> 
    )
}