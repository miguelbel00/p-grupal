import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Styles from "../styles/home.module.css"
import Carrusel from '../componets/Carrusel';
import CardProductContainer from '../componets/CardProductContainer';
import { Link } from "react-router-dom";
import { getAllProducts} from "../redux/actions/actionsPetitions";
import { getUser } from "../redux/actions/actionsPetitions"
import MainCategories from "../componets/MainCategories";
const { REACT_APP_JWT_SECRETO } = process.env
const jwt = require('jsonwebtoken');

export default function Home() {
    const dispatch = useDispatch()
    const userJWT = useSelector(state => state.petitionsReducer.user);
   /*  const userOne = useSelector(state => state.petitionsReducer.userOne) */
    const nullUser = async () => {
        await dispatch(getUser(null))
    }
    nullUser()

    if (userJWT) {
        try {
            const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token : userJWT, REACT_APP_JWT_SECRETO);
            /* userOne === null && */
            dispatch(getUser(decoded?.id ? decoded.id : decoded.user.id))
        } catch (error) { }
    }

    useEffect(() => {
        dispatch(getAllProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={Styles.container}>
            <div className={Styles.carousel}><Carrusel/></div>
            <div><MainCategories/></div>
            <div className={Styles.products}><CardProductContainer/></div>
        </div>
    )
}