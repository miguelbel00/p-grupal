import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../redux/actions/actionsAdmin"
import "../adminStyles/usersAdmin.css"


export default function UserAdmin() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const users = useSelector(state => state.reducerAdmin.users)
  const usersMap = users.map((user) => (
    <div className="ulProductsAdmin">
      <ul className="ulAdmin">
        <li className="liAdmin">UserID:{user.id}</li>
        <li className="liAdmin">Avatar:{user.avatar ? user.avatar : 'Not Avatar'}</li>
        <li className="liAdmin">FullName:{user.fullName}</li>
        <li className="liAdmin">Email:{user.email}</li>
        <li className="liAdmin">Password:{user.password}</li>
        <li className="liAdmin">Phone:{user.phone}</li>
        <button>Editar</button>
        <button>Eliminar</button>
      </ul>
    </div>
  ))
  return (
    <div>
      {usersMap}
    </div>
  )
}