import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Styles from "../styles/home.module.css"
import {  filterCategory, addCategorieFilter, resetFilterCategory} from "../redux/actions/actionsFilter";
import productos from '../assets/main_categories_productos.png'
import computadoras from '../assets/main_categories_computadoras.png'
import componentes from '../assets/main_categories_componentes.png'
import perifericos from '../assets/main_categories_perifericos.png'

function MainCategories() {
    const dispatch = useDispatch()
    const history = useHistory()

    function handleFilterCategory(e) {
        e.preventDefault();
        dispatch(addCategorieFilter([e.target.name]))
        dispatch(filterCategory())
        history.push('/products')
    }

    function handleFilterAll(e) {
        e.preventDefault();
        dispatch(resetFilterCategory())
        dispatch(filterCategory())
        history.push('/products')
    }
    

  return (
    <div className={Styles.category}>
        <div>
            <img src={productos} alt="blank" onClick={handleFilterAll}/>
        </div>
        <div>
            <img src={computadoras} alt="blank" onClick={handleFilterCategory} name='Computers'/>
        </div>
        <div>
            <img src={componentes} alt="blank" onClick={handleFilterCategory} name='Components'/>
        </div>
        <div>
            <img src={perifericos} alt="blank" onClick={handleFilterCategory} name='Peripherals'/>
        </div>
    </div>
  )
}

export default MainCategories