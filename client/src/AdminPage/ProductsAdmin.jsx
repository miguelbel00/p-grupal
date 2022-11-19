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


  console.log(products)


  return (
    <div>
      <div id="container">
        <div className="btn1"><button onClick={handleClick} className="btnn" >New Product </button></div>
        <table class="table">
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
            {products.map((prod) =>
              <tr>
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
     /*     <div className="containerSupremo">

      <div className="controllers ">
        <button className="row button">Create</button>
        <button className="row button">Edit</button>
        <button className="row button">Delete</button>
      </div>
        <div className="products "> {products.map((producto) => (
            <ul className="ulAdmin">
              <li className="liAdmin">Name:{producto.name}</li>
              <li className="liAdmin">Price:{producto.price}</li>
              <li className="liAdmin">Stock:{producto.stock}</li>
            </ul>
        ))}</div>

    </div> */
          
    /* <div className="containerSupremo">
      <div className="row">
      <div className="col-2 justify-center">
        <button className="row button">Create</button>
        <button className="row button">Edit</button>
        <button className="row button">Delete</button>
      </div>
        <div className="col-10 "> {products.map((producto) => (
            <ul className="ulAdmin">
              <li className="liAdmin">Name:{producto.name}</li>
              <li className="liAdmin">Price:{producto.price}</li>
              <li className="liAdmin">Stock:{producto.stock}</li>
            </ul>
        ))}</div>
      </div>
    </div> */
  )
}