import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import Card from "../componets/CardProduct";
import { getAllProducts } from "../redux/actions";
import '../styles/product.css'

// import { getAllProducts } from "../redux/actions";



export default function Products(){
    
    const allProducts = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])

    return(

        <div className="containerCardsProducts" >
            {
                allProducts?.map(e => (
                <Card 
                id={e.id} 
                name={e.name} 
                description={e.description} 
                image={e.image} 
                price={e.price} 
                stock={e.stock} 
                ategories={e.Categories} Transactions={e.Transactions} Reviews={e.Reviews} />))
            }
        </div>
    ) 
    
}