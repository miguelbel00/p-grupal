import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../redux/actions"

export default function Detail(){

    /* const dispatch = useDispatch()
    const poduct = useSelector((state) => state.detail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail())
    }) */

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row-md-4">
                            <h2>NOMBRE DEL PRODUCTO</h2>
                        </div>
                        <div className="row-md-4">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_976403-MLA51364537264_082022-F.webp" alt="img not found" height="250px" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row-md-4">
                            <p>PRECIO</p>
                        </div>
                        <div className="row-md-4">
                            <p>STOCK</p>
                        </div>
                        <div className="row-md-4">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">AGREGAR AL CARRITO</button>
                            <button class="btn btn-primary" type="button">COMPRAR</button>
                        </div>
                        </div>
                    </div>  
                </div>
                <div className="row">
                <h3>DESCRIPCIOOOOOOOOOOOOOOOOOON</h3>
                </div>
            </div>
        </div>
        
    )
}