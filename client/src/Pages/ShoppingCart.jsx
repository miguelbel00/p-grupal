import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemCart from "../componets/ItemCart";
import { removeAllProduct } from "../redux/actions/actionShoppingCart";
import '../styles/shoppingCart.css'
import Swal from 'sweetalert2'

export default function ShoppingCart() {
    const allProducts = useSelector((state) => state.shoppingReducer.productCart);
    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const dispatch = useDispatch()
    const [totalShow, setTotalShow] = useState(0);

    const successAlert =() => {
        Swal.fire({
            title:'All Products Removed!',
            confirmButtonText:"Ok",
            timer:3000,
           icon:"success"
        });
    }

    const setTotal = () => {
        let totalSum = 0
        for (const product in totalCart) {
            let multi = 1
            for (const property in totalCart[product]) {
                multi *= totalCart[product][property]
            }
            totalSum += multi
        }
        setTotalShow(totalSum)
    }


    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }

    const removeLocal = () => {
        localStorage.removeItem('carrito', JSON.stringify(allProducts))
        localStorage.removeItem('totalCart', JSON.stringify(totalCart))
    }


    const clearCart = () => {
        dispatch(removeAllProduct())
        removeLocal()
        setTotalShow(0)
        successAlert()
    }

    useEffect(() => {
        saveLocal()
        setTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts, totalCart, totalShow])


    return (
        <div className="total-cart" >
            <h2 className="card-title">Shopping Cart</h2>
            <button className="btn btn-primary boton" onClick={clearCart}>Remove All</button>
            <div >
                <div className="contenedor-cart-hijo">
                    {allProducts?.map((e,i) => <ItemCart
                        key={i} id={e.id} name={e.name} price={e.price} image={e.image} setTotal={setTotal} 
                    />)}
                </div>
                <h3 className="card-title">Total to pay $ {totalShow}</h3>
            </div>

        </div>
    )
}