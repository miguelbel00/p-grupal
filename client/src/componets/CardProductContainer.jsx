import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import "../styles/cardcontainer.css";


function CardProduct_Container() {
  const allProducts = useSelector((state) => state.filterReducer.filterProducts)

  const mostSelled = allProducts.sort((a, b) => {
    const soldA = a.sold
    const soldB = b.sold
    return soldB - soldA
  }).slice(0, 4)


  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <h3 className="category_container">MOST SELLED:</h3>
          {mostSelled.map(({ name, image, url, id, description, price },i) => (
            <div className="col-sm-6 col-md-3" key={i}>
              <CardProduct image={image} name={name} url={url} description={description} price={price} id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProduct_Container;