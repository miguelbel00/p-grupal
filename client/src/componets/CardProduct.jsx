import React from "react";
import { Link } from 'react-router-dom';

import "../styles/card.css";

export default function Card({ image, name, url, price, id }) {

  return (
    <div className="card">
      <img src={image} alt='' />

      <div className="content">
        <h3>{name}
        </h3>
        <span>${price}</span>

        <Link className="text-decoration-none text-white link" to={`/detail/${id}`}>
          Ver más
        </Link>

      </div>
    </div>
  );
}