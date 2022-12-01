import React from "react";
import { Link } from 'react-router-dom';
import Styles from "../styles/card.module.css";

export default function Card({ image, name, price, id }) {

  return (
    <div className={Styles.container}>
      <img src={image[0]} alt='Img not found' />
      <h3>{name}</h3>
      <span>${price}</span>
      <Link className="text-decoration-none text-white link" to={`/detail/${id}`}>
        <button>
          See more
        </button>
      </Link>
    </div>
  );
}