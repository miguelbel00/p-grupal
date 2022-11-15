import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import ItemCart from "../componets/ItemCart";


export default function ShoppingCart(){
    const allProducts = useSelector((state) => state.shoppingCart.productCart)
    console.log(allProducts)
    const dispatch = useDispatch()
    const { id } = useParams()


    const addToCart = () => {

    }

    const deleteFromCart = () => {

    }

    const clearCart = () => {

    }

    useEffect(()=>{
        
    },[dispatch])


    return(
        <div>
            <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="containerCardsProducts">
                {allProducts?.map((e)=> <ItemCart 
                    name={e.name} price={e.price} image={e.image}
                />)}
            </article>
            </div>

        </div>
    )
}