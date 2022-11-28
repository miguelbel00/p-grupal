import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import Styles from "../styles/cardcontainer.module.css"


function CardProduct_Container() {
  const allProducts = useSelector((state) => state.filterReducer.filterProducts)

  const mostSelled = allProducts.sort((a, b) => {
    const soldA = a.sold
    const soldB = b.sold
    return soldB - soldA
  }).slice(0, 4)


  return (
    <div className={Styles.container}>
      <h4>MOST SELLED:</h4>
      <div className={Styles.cards}>
      {mostSelled.map(({ name, image, url, id, description, price }, i) => (       
          <CardProduct image={image} name={name} url={url} description={description} price={price} id={id} />
      ))}
      </div>
    </div>
  );
}

export default CardProduct_Container;