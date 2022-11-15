import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import Styles from "../styles/profile.module.css"

export default function Profile() {

    const { user, isAuthenticated } = useAuth0()
    console.log(user) //debe consologear la data del usuario google.



    return (

        isAuthenticated ?
            <div className={Styles.container} >

                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
                <Link to={"/"}><button>Edit Profile</button></Link>


             
            </div> :
            <Loading />
    )
}