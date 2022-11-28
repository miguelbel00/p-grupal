import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import Card from "../componets/CardProduct";
import { getAllProducts } from "../redux/actions/actionsPetitions";
import '../styles/product.css'
import Paginated from '../componets/Paginated.jsx'
import Filters from "../componets/Filters";
import Loading from "../componets/Loading"


export default function Products(){
    
    const allProducts = useSelector((state) => state.filterReducer.filterProducts)
    const dispatch = useDispatch()
    const [option, setOption] = useState('')

    const [input, setInpunt] = useState(1);
    const [page, setPage] = useState(1);
    const [forPage] = useState(6);

    const max = Math.ceil(allProducts.length / forPage) ;

    
    useEffect(()=>{
        if (!allProducts.length) {
            dispatch(getAllProducts())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    


    return(
        <div className= 'counter text-center'>
        <div className="row">
            <div className="filtros col-2 "> <Filters setOption={setOption} option={option} setPage={setPage} setInpunt={setInpunt} /></div>
            <div className="col-10">
                <div className="containerCardsProducts">
            {
                allProducts.length > 0 ? allProducts.slice((page - 1) * forPage, (page - 1) * forPage + forPage).map((e,i) => (
                    <Card 
                    key={i}
                    id={e.id} 
                    name={e.name} 
                    description={e.description} 
                    image={e.image} 
                    price={e.price} 
                    stock={e.stock} 
                    Categories={e.Categories} Transactions={e.Transactions} Reviews={e.Reviews} />
                    )):<Loading/>}
                </div>
                <div className="paginado">
                <Paginated page={page} setPage={setPage} max={max} setInpunt={setInpunt} input={input}/>
                </div>
                </div>
        </div>
        
        </div>
                   
    ) 
    
}