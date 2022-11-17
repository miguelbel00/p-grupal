import React from "react";
import CardProduct from "./CardProduct";
import "../styles/cardcontainer.css";

import image1 from "../assets/nt-asus.png";
import image2 from '../assets/nt-hp.png';
import image3 from '../assets/nt-dell.png';
import image4 from '../assets/nt-lenovo.png'

const notbooks = [
  {
    id: 1,
    name: "Notebook Dell Inspiron 3515 plateada 15.5, AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home",
    image: image1,
    url: "",
    description: 'Esta es una breve descripción del producto',
    price: '31.000'
  },
  {
    id: 2,
    name: "Notebook Dell Inspiron 3515 plateada 15.5, AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home",
    image: image2,
    url: "",
    description: 'Esta es una breve descripción del producto',
    price: "18.000"
  },
  {
    id: 3,
    name: "Notebook Dell Inspiron 3515 plateada 15.5, AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home",
    image: image3,
    url: "",
    description: 'Esta es una breve descripción del producto',
    price: '11.000'

  },
  {
    id: 1,
    name: "Notebook Dell Inspiron 3515 plateada 15.5, AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon RX Vega 8 (Ryzen 2000/3000) 1366x768px Windows 11 Home",
    image: image4,
    url: "",
    description: 'Esta es una breve descripción del producto',
    price: '22.000'
  },
];



function CardProduct_Container() {
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          {notbooks.map(({ name, image, url, id, description, price }) => (
            <div className="col-sm-6 col-md-3" key={id}>
              <CardProduct image={image} name={name} url={url} description={description} price={price} id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProduct_Container;