import axios from 'axios'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { getDetail } from "../redux/actions/actionsPetitions"
import { addProductToCart } from '../redux/actions/actionShoppingCart.js'
import Loading from "../componets/Loading"
import Styles from "../styles/detail.module.css"
import Swal from 'sweetalert2'
import ReviewContainer from "../componets/ReviewContainer";
import AddReview from "../componets/AddReview";

export default function Detail() {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.petitionsReducer.detail)
    const allProducts = useSelector((state) => state.shoppingReducer.productCart)
    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const user = useSelector((state) => state.petitionsReducer.userOne);
    const { productId } = useParams()

    const history = useHistory()

    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }

    useEffect(() => {
        dispatch(getDetail(productId))
        saveLocal()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[allProducts])

    useEffect(()=>{
        saveLocal()
    },[product.Reviews])
     
    const successAlert =() => {
        Swal.fire({
            title:'Product Added to cart!',
            confirmButtonText:"Les't buy more products",
            showDenyButton: true,
            denyButtonText: `No, Go to my Cart`,
           icon:"success"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                history.push('/products')
            } else if (result.isDenied) {
                history.push('/shoppingcart')
            }
          })
    }

    const handleonClick =()=>{
        if(totalCart.hasOwnProperty(productId)){
            for (const key in totalCart) {
                if (key === productId){
                    let priceCont = totalCart[key] 
                    totalCart[key] = [priceCont[0], priceCont[priceCont.length - 1 ]  + 1 ]
                }
            }
            localStorage.setItem('totalCart', JSON.stringify(totalCart))
        }
        else{
            dispatch(addProductToCart(productId))
        }
        successAlert()
        history.push('/shoppingcart')
    }

    const handleBuyNow = (e) => {
        const userId = user.id
        const value = e.target.parentNode.parentNode.parentNode.children
        const result = Array.from(value).map(e => e)
        const objResult = {
            description: result[0].outerText,
            price: result[1].outerText.slice(1),
            userId: userId,
            productsId: productId,
        }

        axios.post(`${process.env.REACT_APP_SERVER_BACK}/checkout/checkout-order`, objResult)
            .then(response => window.location.href = response.data.links[1].href)

    }

    if (!Object.values(product).length) { return <Loading /> }

    return (
        <div className={Styles.body}>
            <div className={Styles.container}>
                <div className={Styles.carousel}>
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                        <div className="carousel-inner" id={Styles.car}>
                            <div className="carousel-item active" id={Styles.card}>
                                <img src={product.image[0]} className={Styles.imgcarousel} alt="not found" />
                            </div>
                            {product.image[1] && (
                                <div className="carousel-item" id={Styles.card}>
                                    <img src={product.image[1]} className={Styles.imgcarousel} alt="not found" />
                                </div>)}
                            {product.image[2] && (
                                <div className="carousel-item" id={Styles.card}>
                                    <img src={product.image[2]} className={Styles.imgcarousel} alt="not found" />
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

                <div className={Styles.sidebar}>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <p>Stock: {product.stock}</p>
                    <button onClick={handleonClick} type="button">Add to cart</button>
                    <button onClick={handleBuyNow} type="button">Buy now</button>
                    <label htmlFor="description" >Payment method</label>
                    <div>
                        <img src={"https://cdn-icons-png.flaticon.com/512/888/888870.png"} alt="not found" className={Styles.img}></img>
                    </div>
                </div>

                <div className={Styles.description}>
                    <div className={Styles.label}>
                        <label htmlFor="description" >Description</label>
                    </div>
                    <p>{product.description}</p>
                </div>
                <div className={Styles.addReview}>
                    <AddReview productId={productId} />
                </div>
                <div className={Styles.reviewContainer}>
                    <ReviewContainer reviews={product.Reviews} />
                </div>
            </div>
        </div>
    )
}