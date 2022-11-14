import React from "react";
import { Link } from 'react-router-dom';

import "../styles/card.css";

export default function Card({ image, name, url, price, id }) {


  return (
        <div className="card">
          <Link to='/'>
            <img src={image} alt='' />
          </Link>
          <div className="content">
            <h3><Link to='/'>{name}</Link>
            </h3>
            <span>${price}</span>

            <Link className="text-decoration-none text-white link" to={`/detail/${id}`}>
              Ver más
            </Link>

          </div>
        </div>
  );
}
