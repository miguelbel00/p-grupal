import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "./Loading"

export default function Profile() {

    const { user, isAuthenticated } = useAuth0()
    console.log(user)

  

    return (

        isAuthenticated ?
        <div>

            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <pre>
                {JSON.stringify(user)}
            </pre>

        </div>:
            <Loading/>    
            )
}