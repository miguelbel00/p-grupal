import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeOneProduct } from '../redux/actions/actionShoppingCart'
import '../styles/card.css'

export default function ItemCart ({id, name, price, image}) {

    const allProducts = useSelector((state) => state.shoppingReducer.productCart)

    const dispatch = useDispatch()


   
    const deleteFromCart = (e) => {
        dispatch(removeOneProduct(e.target.id))
        alert('elimindo')
    }


    return(
        <div className="myOrder">
            <h2 className="text-decoration-none ">{name}</h2>
            <h3>{price}</h3>
            <img className="imagenCarrito" src={image} alt={name} />
            <button id={id} onClick={deleteFromCart}>Limpiar carrito</button>
        </div>
    )
}