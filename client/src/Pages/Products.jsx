import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import Card from "../componets/CardProduct";
import { getAllProducts } from "../redux/actions";
import '../styles/product.css'
import Paginated from '../componets/Paginated.jsx'





export default function Products(){
    
    const allProducts = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const [page, setPage] = useState(1);
    const [forPage] = useState(5);

    const max = Math.ceil(allProducts.length / forPage) ;

    
    useEffect(()=>{
        dispatch(getAllProducts())
    },[dispatch])



    return(
        <div>
        <div className="containerCardsProducts" >
            {
                allProducts.length > 1 ? allProducts.slice((page - 1) * forPage, (page - 1) * forPage + forPage).map(e => (
                <Card 
                id={e.id} 
                name={e.name} 
                description={e.description} 
                image={e.image} 
                price={e.price} 
                stock={e.stock} 
                ategories={e.Categories} Transactions={e.Transactions} Reviews={e.Reviews} />
                )):
                allProducts.length > 0 ? 
                allProducts.slice((page - 1) * forPage, (page - 1) * forPage + forPage).map(e => (
                    <Card 
                    id={e.id} 
                    name={e.name} 
                    description={e.description} 
                    image={e.image} 
                    price={e.price} 
                    stock={e.stock} 
                    ategories={e.Categories} Transactions={e.Transactions} Reviews={e.Reviews} />
                    ))
                : <h1>ERROR</h1> }
        </div>
        <Paginated page={page} setPage={setPage} max={max} />
        </div>
                   
    ) 
    
}