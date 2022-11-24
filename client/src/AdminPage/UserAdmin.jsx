import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "../redux/actions/actionsAdmin"
import "../adminStyles/usersAdmin.css"
import eliminar from "../assets/eliminar.png"


export default function UserAdmin() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const users = useSelector(state => state.reducerAdmin.users)

  return (
    <div>
      <div id="container">
        <div className="btn1"><button className="btnn" >New User</button></div>
        <table className="table">
          <thead>
            <tr>
              <th className="id">UserID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,i) =>
              <tr key={i}>
                <td className="id">{user.id}</td>
                <td data-label="fullName">{user.fullName}</td>
                <td data-label="email">{user.email}</td>
                <td data-label="editar"><button>Edit</button></td>
                <td data-label="eliminar"><button><img src={eliminar} alt="Eliminar" width={"18px"}/> </button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}