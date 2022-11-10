import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../redux/actions"
import "../styles/Detail.css"

export default function Detail(){

    /* const dispatch = useDispatch()
    const product = useSelector((state) => state.detail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail())
    }) */

    return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="row-md-4">
                            <h2 className="title">Pc Armada Gamer </h2>
                        </div>
                        <div className="row-md-4">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_976403-MLA51364537264_082022-F.webp" alt="img not found" width="250px" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" id="border">
                        <div className="row">
                            <h3 className="price">$ </h3>
                        </div>
                        <div className="row">
                            <p>Stock:</p>
                        </div>
                        <div className="row" id="btn">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Add to cart</button>
                                <button class="btn btn-primary" type="button">Buy now</button>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row my-3">
                    <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                    </div>
                </div>
            </div>
        
        
    )
}