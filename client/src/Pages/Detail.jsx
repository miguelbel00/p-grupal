import axios from 'axios'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom"
import { getDetail } from "../redux/actions/actionsPetitions"
import { addProductToCart } from '../redux/actions/actionShoppingCart.js'
import Loading from "../componets/Loading"
import "../styles/Detail.css"

export default function Detail() {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.petitionsReducer.detail)
    const allProducts = useSelector((state) => state.shoppingReducer.productCart)
    const { productId } = useParams()

    const history = useHistory()

    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }

    useEffect(()=>{
        dispatch(getDetail(productId))
        saveLocal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[allProducts])
     
    const handleonClick =()=>{
        dispatch(addProductToCart(productId))
        alert('agrgado al carrito')
        history.push('/products')
    }

    const handleBuyNow = (e) => {
        const value = e.target.parentNode.parentNode.parentNode.children
        const result = Array.from(value).map(e => e)
        const objResult = { 
            description: result[0].outerText, 
            price: result[1].outerText.slice(1)
        }
        axios.post(`http://localhost:3005/checkout/checkout-order`, objResult)
        .then(response =>  window.location.href = response.data.links[1].href )
    }

    if(!Object.values(product).length){ return <Loading/>}

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">                  
                    <div className="row-sm-12-md-4" id="slider">
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={product.image[0]} className="d-block w-100" alt="not found" />
                                </div>
                                {product.image[1] &&(
                                <div className="carousel-item">
                                 <img src={product.image[1]} className="d-block w-100" alt="not found" />
                                </div>)}
                                {product.image[2] && (
                                <div className="carousel-item">
                                 <img src={product.image[2]} className="d-block w-100" alt="not found" />
                                </div>)}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4" id="containerTwo">
                    <div className="row" id="title">
                        <h2 className="detail-title">{product.name} </h2>
                    </div>
                    <div className="row" id="price">
                        <h3 className="detail-price">${product.price}</h3>
                    </div>
                    <div className="row" id="stock">
                        <p>Stock: {product.stock}</p>
                    </div>
                    <div className="row" id="btn">
                        <div className="d-grid gap-2">
                            <button onClick={handleonClick} className="btn btn-primary" type="button">Add to cart</button>
                            <button onClick={handleBuyNow}  className="btn btn-primary" type="button">Buy now</button>
                        </div>
                    </div>
                    <div className="row" id="containerTree">
                        <div className="row" id="method">
                            <label htmlFor="description" className="form-label">Payment method</label>
                        </div>
                        <div className="row" id="img">
                            <img src={"https://cdn-icons-png.flaticon.com/512/888/888870.png"} alt="not found" width="200px"></img>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row-4" id="containerFive">
                <label htmlFor="description" className="form-label">Description</label>
                <div id="description">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}