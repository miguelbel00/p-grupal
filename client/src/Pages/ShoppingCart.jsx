import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import ItemCart from "../componets/ItemCart";
import { removeAllProduct, sumaTotal } from "../redux/actions/actionShoppingCart";

export default function ShoppingCart(){
    const allProducts = useSelector((state) => state.shoppingReducer.productCart)
    const suma = useSelector((state)=> state.shoppingReducer.suma)

    console.log(suma)
    const dispatch = useDispatch()
  
    const saveLocal = () => {
        
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }


    const clearCart = () => {
        dispatch(removeAllProduct())
        
        alert('Clean cart')
    }


    // const total = () => {
    //     allProducts.reducer((acc, p)=> acc + p.price, 0)
    // } 

    useEffect(()=>{
        saveLocal()
    },[allProducts])


    return(
        <div>
            <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="containerCardsProducts">
                {allProducts?.map((e)=> <ItemCart 
                    id={e.id} name={e.name} price={e.price} image={e.image} 
                />)}
            </article>
            <h3>Total $ {}</h3>
            <button onClick={clearCart} >Remove All</button>
            </div>

        </div>
    )
}