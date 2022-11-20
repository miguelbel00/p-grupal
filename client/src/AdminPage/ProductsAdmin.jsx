import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../redux/actions/actionsAdmin"
import '../styles/admin.css'
import eliminar from "../assets/eliminar.png"
import { useHistory } from "react-router-dom"


export default function ProductsAdmin() {
  const products = useSelector(state => state.reducerAdmin.products)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault()
    history.push('/admin/createproduct')
  }
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <div id="container">
        <div className="btn1"><button onClick={handleClick} className="btnn" >New Product </button></div>
        <table className="table">
          <thead>
            <tr>
              <th className="id">N°</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Edit</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod,i) =>
              <tr key={i}>
                <td className="id">{prod.id}</td>
                <td data-label="fullName">{prod.name}</td>
                <td data-label="email">${prod.price}</td>
                <td data-label="email">{prod.stock}</td>
                <td data-label="editar"><button>Editar</button></td>
                <td data-label="eliminar"><button><img src={eliminar} alt="Eliminar" width={"18px"}/></button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}