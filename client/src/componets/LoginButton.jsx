
import { useAuth0 } from "@auth0/auth0-react"

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <button  onClick={() => loginWithRedirect()} ><i className="bi bi-person-circle nav-link mb-3"> Login</i></button>
        </div>
    )
}