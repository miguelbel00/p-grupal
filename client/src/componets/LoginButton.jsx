import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import { Link, useHistory } from "react-router-dom"

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0()
    const history = useHistory()
    return (
        <div>
            <button  onClick={() => loginWithRedirect()} ><i className="bi bi-person-circle nav-link mb-3">Google</i></button>
            <button  onClick={()=> history.push('/login')} ><i className="bi bi-person-circle nav-link mb-3" > Login</i></button>
            <button  onClick={()=> history.push('/register')} ><i className="bi bi-person-circle nav-link mb-3" > Register</i></button>
        </div>
    )
}