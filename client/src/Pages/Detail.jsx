import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getDetail } from "../redux/actions"
import "../styles/Detail.css"

export default function Detail() {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.detail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="row-md-4">
                        <h2 className="title">Pc Armada Gamer{product.name} </h2>
                    </div>
                    <div className="row-md-4">
                        <img /* src={product.image} */
                        src="https://http2.mlstatic.com/D_NQ_NP_2X_976403-MLA51364537264_082022-F.webp" 
                        alt="img not found" width="350px" id="imgg"/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" id="containerTwo">
                    <div className="row" id="price">
                        <h3 className="price">$ 200.000 {product.price}</h3>
                    </div>
                    <div className="row" id="stock">
                        <p>Stock:{product.stock}</p>
                    </div>
                    <div className="row" id="btn">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Add to cart</button>
                            <button class="btn btn-primary" type="button">Buy now</button>
                        </div>
                    </div>
                    <div class="row" id="containerTree">
                        <div className="row" id="method">
                            <label for="description" class="form-label">Payment method</label>
                        </div>
                        <div className="row" id="img">
                            <img src={"https://cdn-icons-png.flaticon.com/512/888/888870.png"} alt="not found" width="200px"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-4" id="containerFive">
                <table class="table table-bordered">
                    <label for="description" class="form-label">Main features</label>
                    <tbody>
                        <tr>
                            <th scope="row-4">DATO1</th>
                            <td>info</td>
                        </tr>
                        <tr>
                            <th scope="row">DATO2</th>
                            <td>info</td>
                        </tr>
                        <tr>
                            <th scope="row">DATO3</th>
                            <td>info</td>
                        </tr>
                        <tr>
                            <th scope="row">DATO4</th>
                            <td>info</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row-4" id="containerFive">
                <label for="description" class="form-label">Description</label>
                <div id="description">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}