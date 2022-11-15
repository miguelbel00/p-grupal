import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, orderByPrice, filterCategory } from "../redux/actions/actionsFilter";


export default function Filters({ setOption, setPage }) {
    const dispatch = useDispatch()



    function handleOrderByPrice(e) {
        e.preventDefault()
        if (e.target.value === 'All') {
            dispatch(getAllProducts())

        } else {
            dispatch(orderByPrice(e.target.value))
            setOption(e.target.value)

        }
        setPage(1)
    }
    function handleFilterCategory(e){
        e.preventDefault();
        dispatch(filterCategory(e.target.value))
    }

    return (
        <div>
            <div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => handleOrderByPrice(e)}>
                    <option value='All'>Price</option>
                    <option value='Min'>Min-Price</option>
                    <option value='Max'>Max-Price</option>
                </select>
            </div>
            <div>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={e => handleFilterCategory(e)}>
                    <option selected>Categorias</option>
                    <option value="Todo">Todas las categorias</option>
                    <option value="Computadores">Computadores</option>
                    <option value="Perifericos">Perifericos</option>
                    <option value="Componentes">Componentes</option>
                    <option value="Amd">Amd</option>
                    <option value="Intel">Intel</option>
                    <option value="Gamer">Gamer</option>
                    <option value="Trabajo">Trabajo</option>
                    <option value="Estudio">Estudio</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Procesador">Procesador</option>
                    <option value="Disco Duro">Disco Duro</option>
                    <option value="Disco SSD">Disco SSD</option>
                    <option value="Memoria Ram">Memoria Ram</option>
                    <option value="Fuentes">Fuentes</option>
                    <option value="Refrigeracion">Refrigeracion</option>
                    <option value="Placas de video">Placas de video</option>
                    <option value="Gabinet">Gabinet</option>
                    <option value="Teclad">Teclad</option>
                    <option value="Auricular">Auricular</option>
                    <option value="Mouse">Mouse</option>     
                </select>
            </div>
        </div>
    )
}