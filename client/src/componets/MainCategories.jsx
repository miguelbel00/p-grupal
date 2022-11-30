import React from 'react'
import { Link } from "react-router-dom";
import Styles from "../styles/home.module.css"
import mainCategories_computers from '../assets/main_cateogires_computers.jpeg'
import mainCategories_components from '../assets/main_cateogires_componentes.jpeg'
import mainCategories_perifericos from '../assets/main_cateogires_perifericos.jpeg'



function MainCategories() {
  return (
    <div className={Styles.category}>
        <div>
            <Link to={'/products'} className="text-reset text-decoration-none" >
                <img src={mainCategories_computers} alt="blank" />
            </Link>
        </div>
        <div>
            <Link to={'/products'} className="text-reset text-decoration-none" >
                <img src={mainCategories_components} alt="blank" />
            </Link>
        </div>
        <div>
            <Link to={'/products'} className="text-reset text-decoration-none" >
                <img src={mainCategories_perifericos} alt="blank" />
            </Link>
        </div>
    </div>
  )
}

export default MainCategories