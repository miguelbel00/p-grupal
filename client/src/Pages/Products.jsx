import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../componets/CardProduct";
import { getAllProducts } from "../redux/actions/actionsPetitions";
//import '../styles/product.css'
import s from '../styles/products.module.css'
import Paginated from '../componets/Paginated.jsx'
import Filters from "../componets/Filters";



export default function Products() {

    const allProducts = useSelector((state) => state.filterReducer.filterProducts)
    const dispatch = useDispatch()
    const [option, setOption] = useState('')

    const [input, setInpunt] = useState(1);
    const [page, setPage] = useState(1);
    const [forPage] = useState(6);

    const max = Math.ceil(allProducts.length / forPage);


    useEffect(() => {
        if (!allProducts.length) {
            dispatch(getAllProducts())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className={s.container}>
            <div className={s.filters}>
                <Filters setOption={setOption} option={option} setPage={setPage} setInpunt={setInpunt} />
            </div>
            <div className={s.contenedor}>
            <div className={s.products}>
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
                    )) : <h1>ERROR</h1>}
            </div>

            <div className={s.paginado}>
                <Paginated page={page} setPage={setPage} max={max} setInpunt={setInpunt} input={input} />
            </div>
            </div>
        </div>
    )

}