import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../componets/CardProduct";
import { getAllProducts, getUser } from "../redux/actions/actionsPetitions";
import Styles from '../styles/products.module.css'
import Paginated from '../componets/Paginated.jsx'
import Filters from "../componets/Filters";
import Loading from "../componets/Loading"
import { scroll } from "./Function";
const jwt = require('jsonwebtoken');


export default function Products(){
    
    const userJWT = useSelector(state => state.petitionsReducer.user);
    const allProducts = useSelector((state) => state.filterReducer.filterProducts)
    const userOne = useSelector(state => state.petitionsReducer.userOne)
    const dispatch = useDispatch()
    const [option, setOption] = useState('')

    const [input, setInpunt] = useState(1);
    const [page, setPage] = useState(1);
    const [forPage] = useState(6);
    scroll()

    if(userJWT){
        try {
            const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token :userJWT, process.env.REACT_APP_JWT_SECRETO);
            userOne === null &&
            dispatch(getUser(decoded?.id ?decoded.id :decoded.user.id  ))
        } catch (error) {}
    }


    const max = Math.ceil(allProducts.length / forPage) ;


    useEffect(() => {
        if (!allProducts.length) {
            dispatch(getAllProducts())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className={Styles.container}>
            <div className={Styles.filters}>
                <Filters setOption={setOption} option={option} setPage={setPage} setInpunt={setInpunt} />
            </div>
            <div className={Styles.contenedor}>
            <div className={Styles.products}>
                {
                    allProducts.length > 1 ? allProducts.slice((page - 1) * forPage, (page - 1) * forPage + forPage).map((e, i) => (
                        <Card
                            key={i}
                            id={e.id}
                            name={e.name}
                            description={e.description}
                            image={e.image}
                            price={e.price}
                            stock={e.stock}
                            Categories={e.Categories} Transactions={e.Transactions} Reviews={e.Reviews} />
                    )) : <Loading/>}
            </div>

            <div className={Styles.paginado}>
                <Paginated page={page} setPage={setPage} max={max} setInpunt={setInpunt} input={input} />
            </div>
            </div>
        </div>
    )

}