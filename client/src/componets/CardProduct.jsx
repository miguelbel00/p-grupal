import React from "react";
import { Link } from 'react-router-dom';

import "../styles/card.css";

export default function Card({ image, name, url, price, id }) {


  return (
        <div className="card">
          
            <Link to={`/detail/${id}`}>
            <div>
            <img src={image} alt='' />
            </div>
          <div className="content">
            <h3>
            </h3>
            <span>${price}</span>
            <button className="text-decoration-none text-white link" > 
              Ver más
            </button>

          </div>
            </Link>
        </div>
  );
}
