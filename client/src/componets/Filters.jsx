import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts, orderByPrice } from "../redux/actions";

export default function Filters({setOption, setPage}){
    const dispatch = useDispatch()
    

    
    function handleOrderByPrice(e){
        e.preventDefault()
        if(e.target.value === 'All'){
            dispatch(getAllProducts())
            
        }else{
            dispatch(orderByPrice(e.target.value))
            setOption(e.target.value)
            
        }
        setPage(1)
    }

    return(
        <div>

    <select className='select' onChange={(e)=>handleOrderByPrice(e)}>
              <option value='All'>Price</option>
              <option value='Min'>Min-Price</option>
              <option value='Max'>Max-Price</option>
            </select>
        </div>
    )
}