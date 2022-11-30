import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Styles from "../styles/home.module.css"
import {  filterCategory, addCategorieFilter} from "../redux/actions/actionsFilter";
import mainCategories_computers from '../assets/main_cateogires_computers.jpeg'
import mainCategories_components from '../assets/main_cateogires_componentes.jpeg'
import mainCategories_perifericos from '../assets/main_cateogires_perifericos.jpeg'



function MainCategories() {
    const dispatch = useDispatch()
    const history = useHistory()

    function handleFilterCategory(e) {
        e.preventDefault();
        dispatch(addCategorieFilter([e.target.name]))
        dispatch(filterCategory())
        history.push('/products')
    }
    

  return (
    <div className={Styles.category}>
        <div>
            <img src={mainCategories_computers} alt="blank" onClick={handleFilterCategory} name='Computadores'/>
        </div>
        <div>
            <img src={mainCategories_components} alt="blank" onClick={handleFilterCategory} name='Componentes'/>
        </div>
        <div>
            <img src={mainCategories_perifericos} alt="blank" onClick={handleFilterCategory} name='Perifericos'/>
        </div>
    </div>
  )
}

export default MainCategories