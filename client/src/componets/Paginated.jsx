import React from "react";
import Styles from '../styles/paginated.module.css'


export default function Paginated({ page, setPage, max, input, setInpunt }) {

    const nextPage = () => {
        setInpunt(parseInt(input) + 1);
        setPage(parseInt(page) + 1)
    };

    const backPage = () => {
        setInpunt(parseInt(input) - 1);
        setPage(parseInt(page) - 1)
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setPage(parseInt(e.target.value))
            if (parseInt(e.target.value < 1) || parseInt(e.target.value) > Math.ceil(max) || isNaN(parseInt(e.target.value))) {
                setPage(1)
                setInpunt(1)
            } else {
                setPage(parseInt(e.target.value))
            }
        }
    }

    const onChange = (e) => {
        setInpunt(e.target.value)
    }

    return (
        <div className={Styles.pagination}>
            <button className={Styles.pageBtn} disabled={page === 1 || page < 1} onClick={backPage}>Back</button>
            <input className={Styles.pages} onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} name='page' autoComplete="off" value={input}></input>
            <h5 className={Styles.pages1}>de {max}</h5>
            <button className={Styles.pageBtn} disabled={page === max || page > max} onClick={nextPage}>Next</button>
        </div>
    )
}