import axios from 'axios'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom"
import ItemCart from "../componets/ItemCart";
import { removeAllProduct } from "../redux/actions/actionShoppingCart";
import Styles from '../styles/shoppingCart.module.css'
import basura from "../assets/eliminar.png"
import carrito from "../assets/carrito.gif"
import Swal from 'sweetalert2'
import { getUser } from "../redux/actions/actionsPetitions";
const jwt = require('jsonwebtoken');
const {REACT_APP_JWT_SECRETO} = process.env

export default function ShoppingCart() {
    const dispatch = useDispatch()
    const userOne = useSelector( (state) =>  state.petitionsReducer.userOne);
    const userJWT = useSelector(state => state.petitionsReducer.user);
  
   
    if(userJWT){
        try {
            const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token :userJWT, REACT_APP_JWT_SECRETO);
            userOne === null &&
            dispatch(getUser(decoded?.id ?decoded.id :decoded.user.id  ))
        } catch (error) {}
    }
    const allProducts = useSelector((state) => state.shoppingReducer.productCart);
    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const user = useSelector((state) => state.petitionsReducer.userOne);
    const history = useHistory()
    const [totalShow, setTotalShow] = useState(0);

    const emptyCart = () => {
        Swal.fire({
            title:'Error!',
            text:`ShoppingCart is empty`,
            confirmButtonText:"Let's buy products",
            background:'#fff',
            icon:'error',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
                history.push('/products')
        });
    }
    const userRegister = () => {
        Swal.fire({
            title: 'The register is required',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "error"
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
                history.push('/register')
        });
    }

    const successAlert = () => {
        Swal.fire({
            title: 'All Products Removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    }

    const setTotal = () => {
        let totalSum = 0
        for (const product in totalCart) {
            let multi = 1
            for (const property in totalCart[product]) {
                multi *= totalCart[product][property]
            }
            totalSum += multi
        }
        setTotalShow(totalSum)
    }


    const saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts))
    }

    const removeLocal = () => {
        localStorage.removeItem('carrito', JSON.stringify(allProducts))
        localStorage.removeItem('totalCart', JSON.stringify(totalCart))
    }


    const clearCart = () => {
        dispatch(removeAllProduct())
        removeLocal()
        setTotalShow(0)
        successAlert()
    }

    const clearCartWithOutAlert = () => {
        dispatch(removeAllProduct())
        removeLocal()
        setTotalShow(0)
    }

    const handleBuyNow = () => {
        if( Object.keys(totalCart).length > 0 ){
            setTimeout(() => {
                if(user){
                const objCart = {
                    userId: user.id && user.id,
                    description: allProducts.length && allProducts.map((e) =>  `producto: ${e.name} cantidad: ${totalCart[e.id][1]} total: U$D ${totalCart[e.id][0] * totalCart[e.id][1]}`  ).join(' | '),
                    productsId: allProducts.map((e)=> e.id).join(','), 
                    price: totalShow.toString(),
                    totalCart:localStorage.getItem('totalCart'),
                }
                axios.post(`${process.env.REACT_APP_SERVER_BACK}/checkout/checkout-order`, objCart)
                .then(response =>  window.location.href = response.data.links[1].href )
                .then(()=> clearCartWithOutAlert()) 
            }else{
                userRegister()
            }},200)
                
        }else{
            emptyCart()
        }
    }

    useEffect(() => {
        saveLocal()
        setTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps

    },[setTotal, totalCart, allProducts])

    /* if (!Object.values(product).length) { return <Loading /> } */
    return (
        <div className={Styles.container}>
            <div className={Styles.title}><h2 >Shopping Cart</h2></div>
            <div className={Styles.product}>
                {!allProducts.length ?
                    (<div className={Styles.trolley}>
                        <img src={carrito} alt="not found" />
                        <p>There are no products in the cart yet!</p>
                    </div>) :
                    allProducts?.map((e, i) => <ItemCart
                        key={i} id={e.id} name={e.name} price={e.price} image={e.image} setTotal={setTotal}
                    />)}
            </div>
            <div className={Styles.totalProduct}>
                <div className={Styles.containerOne}>
                    <p>ORDER SUMMARY</p>
                    <div className={Styles.total}>
                        <span>Total: </span>
                        <span className={Styles.price}> $ {totalShow}</span>
                    </div>
                </div>
                <div className={Styles.containerTwo}>
                    <button className={Styles.btn1} onClick={clearCart}><img src={basura} alt={"eliminar"} /></button>
                    <button className={Styles.btn2} type="button" onClick={handleBuyNow} >Buy now</button>
                </div>
            </div>
        </div>
    )
}