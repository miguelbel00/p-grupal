import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions/actionsPetitions";
import { searchProduct } from "../redux/actions/actionsFilter";
import Search from '../styles/searchBar.module.css'


export default function SearchBar() {
    const [input, setInput] = useState('')
    const products = useSelector(state => state.reducerAdmin.products)
    const history = useHistory();
    const dispatch = useDispatch()
    
    
    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)

    }

    function handleSubmit(producto){
        console.log(producto)
        dispatch(getDetail(producto.id))
        history.push(`/detail/${producto.id}`)
        setInput('')
    }


    function handleProduct(e){
        dispatch(searchProduct(input))
        history.push('/products')
        setInput('')
        

        
    }
    return(
        <div>
            <form className="d-flex" role="search"> 
                        <input onChange={handleInput} value={input} className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"
                        /> 
                        <button  className="btn btn-outline-secondary" type="button" onClick={(e) => handleProduct(e)}>Search</button>
                     </form> 
                     <div  className={input ? Search.dropdown : Search.dropdownHidden}>
                        {products.filter(p => {
                            let searchProduct = input?.charAt(0).toUpperCase() + input?.toLowerCase().slice(1);
                            return searchProduct && p.name.startsWith(searchProduct) && p.name !== searchProduct
                        }).slice(0,4)
                        .map(p=>(
                            <button className={Search.button1} type='button' onClick={() => handleSubmit(p)} key={`${p.name}_${p.id}`}>
                            <div className={Search.dropdownRow} key={p.id} id={p.name}>
                                <img src={p.image} alt={p.name} />
                                {p.name}
                                {p.id}
                            </div>
                            </button>
                            
                        ))}
                     </div>
        </div>
    )
    
};