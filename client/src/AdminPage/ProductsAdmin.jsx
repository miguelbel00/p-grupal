import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from "../redux/actions/actionsAdmin"
import '../styles/admin.css'

export default function ProductsAdmin() {
  const products = useSelector(state => state.reducerAdmin.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  console.log(products)


  return (
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
          
    <div className="containerSupremo">
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
    </div>
  )
}