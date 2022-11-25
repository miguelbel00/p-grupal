import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { getDetail } from "../redux/actions/actionsPetitions"
import { addProductToCart } from '../redux/actions/actionShoppingCart.js'
import Loading from "../componets/Loading"
import s from "../styles/detail.module.css"
import Swal from 'sweetalert2'

export default function Detail() {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.petitionsReducer.detail)
    const allProducts = useSelector((state) => state.shoppingReducer.productCart)
    const { productId } = useParams()

    const history = useHistory()

    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }

    useEffect(() => {
        dispatch(getDetail(productId))
        saveLocal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])

    const successAlert = () => {
        Swal.fire({
            title: 'Product Added to cart!',
            confirmButtonText: "Les't buy more products",
            timer: 3000,
            icon: "success"
        });
    }

    const handleonClick = () => {
        dispatch(addProductToCart(productId))
        successAlert()
        history.push('/products')
    }

    if (!Object.values(product).length) { return <Loading /> }

    return (
        <div className={s.container}>
            <div className={s.carousel}>
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                    <div className="carousel-inner" id={s.car}>
                        <div className="carousel-item active" id={s.card}>
                            <img src={product.image[0]} className={s.imgcarousel} alt="not found" />
                        </div>
                        {product.image[1] && (
                            <div className="carousel-item" id={s.card}>
                                <img src={product.image[1]} className={s.imgcarousel} alt="not found" />
                            </div>)}
                        {product.image[2] && (
                            <div className="carousel-item" id={s.card}>
                                <img src={product.image[2]} className={s.imgcarousel} alt="not found" />
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

            <div className={s.sidebar}>
                <h2>{product.name}</h2>
                <h3>${product.price}</h3>
                <p>Stock: {product.stock}</p>
                <button onClick={handleonClick} type="button">Add to cart</button>
                <button type="button">Buy now</button>
                <label htmlFor="description" >Payment method</label>
                <div>
                    <img src={"https://cdn-icons-png.flaticon.com/512/888/888870.png"} alt="not found" className={s.img}></img>
                </div>
            </div>

            <div className={s.description}>
                <div className={s.label}>
                    <label htmlFor="description" >Description</label>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
    )
}